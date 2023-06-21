import express from 'express';
import * as dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../mongodb/models/user.js';

dotenv.config();
const router = express.Router();

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

export default router;
