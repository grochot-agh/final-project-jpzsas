import express from 'express';
import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';
import Post from '../mongodb/models/post.js';

dotenv.config();

const router = express.Router();

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_SECRET,
});

router.route('/').get(async (req, res) => {
	try {
		const posts = await Post.find({});

		res.status(200).json({ success: true, data: posts });
	} catch (err) {
		res.status(500).json({ success: false, message: err });
	}
});

router.route('/').post(async (req, res) => {
	try {
		const { prompt, image } = req.body;
		const imgUrl = await cloudinary.uploader.upload(image);

		const newPost = await Post.create({
			prompt,
			image: imgUrl.url,
		});
		res.status(201).json({ success: true, data: newPost });
	} catch (error) {
		res.status(500).json({ success: false, message: err });
	}
});
export default router;
