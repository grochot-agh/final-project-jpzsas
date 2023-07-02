import express from 'express';
import * as dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../mongodb/models/user.js';

dotenv.config();
const router = express.Router();

/*changing the user login with checking if the new login is taken;
 requires the user's password to be changed*/
const changeLogin = async (user, login, currPassword, res) => {
	try {
		const passwordMatch = await bcrypt.compare(currPassword, user.password);
		if (await User.findOne({ login: login })) {
			return res
				.status(400)
				.json({ success: false, message: 'This login already exists' });
		}
		if (passwordMatch) {
			await User.findOneAndUpdate(
				{ _id: user._id },
				{ $set: { login: login } }
			);
			res.status(200).json({ success: true, message: 'Login changed' });
		} else {
			res.status(401).json({
				success: false,
				message: 'Incorrect password. Please try again.',
			});
		}
	} catch (err) {
		res.status(500).json({
			success: false,
			message: 'An error occurred while changing the login.',
		});
	}
};

/*changing the user's email address with checking if email is not used by another user;
requires a password to change*/
const changeEmail = async (user, email, currPassword, res) => {
	try {
		const passwordMatch = await bcrypt.compare(currPassword, user.password);
		if (await User.findOne({ email: email })) {
			return res
				.status(400)
				.json({ success: false, message: 'This email already exists' });
		}
		if (passwordMatch) {
			await User.findOneAndUpdate(
				{ _id: user._id },
				{ $set: { email: email } }
			);
			res.status(200).json({ success: true, message: 'Email changed' });
		} else {
			res.status(401).json({
				success: false,
				message: 'Incorrect password. Please try again.',
			});
		}
	} catch (err) {
		res.status(500).json({
			success: false,
			message: 'An error occurred while changing the email.',
		});
	}
};

/*changing password, it checks current pasword hash if it matches hash in database
 new password requires 6 characters, 1 letter, 1 number, 1 special character*/
const changePassword = async (
	user,
	currPassword,
	password,
	sndPassword,
	res
) => {
	try {
		const passwordMatch = await bcrypt.compare(currPassword, user.password);
		if (passwordMatch) {
			if (password !== sndPassword) {
				return res
					.status(400)
					.json({ success: false, message: 'Passwords do not match' });
			} else if (password.length < 6) {
				return res.status(400).json({
					success: false,
					message: 'Password must be at least 6 characters long',
				});
			} else if (
				!/^(?=.*\d)(?=.*[!@#$%^&*()_\-+=~`[\]{}|:;"'<>,.?\\/])(?=.*[a-zA-Z])/.test(
					password
				)
			) {
				return res.status(400).json({
					success: false,
					message:
						'Password must contain at least one letter, one number and one special character',
				});
			} else {
				const encPassword = await bcrypt.hash(password, 10);
				await User.findOneAndUpdate( //updating user password in database
					{ _id: user._id },
					{ $set: { password: encPassword } }
				);
				res.status(200).json({ success: true, message: 'Password changed' });
			}
		} else {
			res.status(401).json({
				success: false,
				message: 'Incorrect password. Please try again.',
			});
		}
	} catch (err) {
		res.status(500).json({
			success: false,
			message: 'An error occurred while changing the password.',
			error: err.message,
		});
	}
};

router.route('/').get((req, res) => {
	res.send('User route is running');
});

/* register routes; checking if repeated password matches the previous one;
check if password is 6 characters long; if contains 1 letter, 1 number and 1 special character;
check if there is user with the same login or email address
*/
router.route('/register').post(async (req, res) => {
	try {
		const { email, login, password, sndPassword } = req.body;
		if (password !== sndPassword) {
			return res
				.status(400)
				.json({ success: false, message: 'Passwords do not match' });
		} else if (password.length < 6) {
			return res.status(400).json({
				success: false,
				message: 'Password must be at least 6 characters long',
			});
		} else if (
			!/^(?=.*\d)(?=.*[!@#$%^&*()_\-+=~`[\]{}|:;"'<>,.?\\/])(?=.*[a-zA-Z])/.test(
				password
			)
		) {
			return res.status(400).json({
				success: false,
				message:
					'Password must contain at least one letter, one number and one special character',
			});
		} else {
			const encPassword = await bcrypt.hash(password, 10);
			try {
				const existingUser = await User.findOne({ email: email, login: login });
				const sameEmail = await User.findOne({ email: email });
				const sameLogin = await User.findOne({ login: login });

				if (existingUser) {
					return res
						.status(400)
						.json({ success: false, message: 'User already exists' });
				}

				if (sameEmail) {
					return res.status(400).json({
						success: false,
						message: 'User with given email already exists',
					});
				}

				if (sameLogin) {
					return res.status(400).json({
						success: false,
						message: 'User with given login already exists',
					});
				}

				await User.create({
					email,
					login,
					password: encPassword,
				});
				res.status(201).json({ success: true, message: 'User created' });
			} catch (err) {
				res.status(500).json({ success: false, message: err });
			}
		}
	} catch (err) {
		res.status(500).json({ success: false, message: err });
	}
});

/*routing for login; checking if credentials are matching */
router.route('/login').post(async (req, res) => {
	try {
		const { login, email, password } = req.body;
		let user = '';
		if (await User.findOne({ login })) {
			user = await User.findOne({ login });
		} else if (await User.findOne({ email })) {
			user = await User.findOne({ email });
		} else {
			res.status(400).json({
				success: false,
				message: 'User with given credentials was not found',
			});
		}

		if (!user) {
			return res
				.status(400)
				.json({ success: false, message: 'User not found' });
		}

		if (await bcrypt.compare(password, user.password)) {
			const token = jwt.sign({ login: user.login }, process.env.JWT_SECRET, {
				expiresIn: '1h',
			});

			if (res.status(200)) {
				return res.status(200).json({ success: true, data: token });
			} else {
				return res
					.status(500)
					.json({ success: false, message: 'Something went wrong' });
			}
		}
		res.status(401).json({ success: false, message: 'Wrong password' });
	} catch (error) {
		res.status(500).json({ success: false, message: error });
	}
});

router.route('/profile').post(async (req, res) => {
	try {
		const { token } = req.body;

		const user = jwt.verify(token, process.env.JWT_SECRET, (err, res) => {
			if (err) {
				return 'Token expired';
			}
			return res;
		});
		if (user == 'Token expired') {
			return res.status(401).json({ success: false, data: 'Token expired' });
		}

		const userLogin = user.login;
		User.findOne({ login: userLogin })
			.then((data) => {
				res.status(200).json({ success: true, data: data });
			})
			.catch((err) => {
				res.status(500).json({ success: false, message: err });
			});
	} catch (err) {
		res.status(500).json({ success: false, message: err });
	}
});

//deleting users from database
router.route('/delete-acc').post(async (req, res) => {
	const { userID } = req.body;
	try {
		await User.findByIdAndDelete(userID);
		res.status(200).json({ success: true, message: 'User deleted' });
	} catch (err) {
		res.status(500).json({ success: false, message: err });
	}
});

/*Changing login or email adress or password and handling it*/
router.route('/update-account').post(async (req, res) => {
	const { login, email, password, currPassword, sndPassword, id } = req.body;
	const user = await User.findOne({ _id: id });
	try {
		if (login !== '' || email !== '') {
			// Handle changing login or email
			if (login !== '' && currPassword !== '') {
				await changeLogin(user, login, currPassword, res);
			} else if (email !== '' && currPassword !== '') {
				await changeEmail(user, email, currPassword, res);
			} else {
				res.status(400).json({
					success: false,
					message: 'Please provide both a new value and a password.',
				});
			}
		} else if (currPassword !== '' && password !== '' && sndPassword !== '') {
			// Handle changing password
			await changePassword(user, password, currPassword, sndPassword, res);
		} else {
			res.status(400).json({
				success: false,
				message: 'Please fill in all the fields.',
			});
		}
	} catch (err) {
		res.status(500).json({
			success: false,
			message: 'An error occurred while updating the account.',
		});
	}
});

export default router;
