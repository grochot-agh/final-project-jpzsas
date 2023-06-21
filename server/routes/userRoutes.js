import express from 'express';
import * as dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../mongodb/models/user.js';

dotenv.config();
const router = express.Router();

const changeLogin = async (user, login, currPassword, res) => {
	try {
		if (bcrypt.compare(currPassword, user.password)) {
			await User.findOneAndReplace(
				{ _id: user._id },
				{ $set: { login: login } },
				{ new: true }
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

const changeEmail = async (user, email, currPassword, res) => {
	try {
		if (bcrypt.compare(currPassword, user.password)) {
			await User.findOneAndReplace(
				{ _id: user._id },
				{ $set: { email: email } },
				{ new: true }
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

const changePassword = async (
	user,
	currPassword,
	password,
	sndPassword,
	res
) => {
	try {
		if (bcrypt.compare(currPassword, user.password)) {
			if (password !== sndPassword) {
				return res.status(400).json({
					success: false,
					message: 'New passwords do not match. Please try again.',
				});
			}
			await User.findOneAndReplace(
				{ _id: user._id },
				{ $set: { password: password } },
				{ new: true }
			);
			res.status(200).json({ success: true, message: 'Password changed' });
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
		});
	}
};

router.route('/').get((req, res) => {
	res.send('User route is running');
});

router.route('/register').post(async (req, res) => {
	try {
		const { email, login, password, sndPassword } = req.body;
		if (password !== sndPassword) {
			return res
				.status(400)
				.json({ success: false, message: 'Passwords do not match' });
		} else {
			const encPassword = await bcrypt.hash(password, 10);
			try {
				const existingUser = await User.findOne({ email: email, login: login });

				if (existingUser) {
					return res
						.status(400)
						.json({ success: false, message: 'User already exists' });
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

router.route('/login').post(async (req, res) => {
	try {
		const { login, password } = req.body;

		const user = await User.findOne({ login });

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
			return res.status(401).json({ success: false, message: user });
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

router.route('/delete-acc').post(async (req, res) => {
	const { userID } = req.body;
	try {
		await User.findByIdAndDelete(userID);
		res.status(200).json({ success: true, message: 'User deleted' });
	} catch (err) {
		res.status(500).json({ success: false, message: err });
	}
});

router.route('/update-account').post(async (req, res) => {
	const { login, email, currPassword, password, sndPassword, id } = req.body;
	const user = await User.findOne({ _id: id });
	try {
		if (login != '' && password != '') {
			await changeLogin(user, login, password, res);
		} else if (email != '' && password != '') {
			await changeEmail(user, email, password, res);
		} else if (login == '' && email == '') {
			await changePassword(user, currPassword, password, sndPassword, res);
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
