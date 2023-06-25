import express from 'express';
import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';
import Post from '../mongodb/models/post.js';
import Comment from '../mongodb/models/comment.js';

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
		res.status(500).json({
			success: false,
			message: 'Fetching posts failed, please try again',
		});
	}
});

router.route('/:creator').get(async (req, res) => {
	const creator = req.params.creator;
	try {
		const posts = await Post.find({ creator });

		if (posts.length === 0) {
			return res
				.status(404)
				.json({ success: false, message: 'No posts found' });
		}
		res.status(200).json({ success: true, data: posts });
	} catch (err) {
		res.status(500).json({ success: false, message: err });
	}
});

router.route('/').post(async (req, res) => {
	try {
		const { creator, prompt, image, hashtag } = req.body;
		const imgUrl = await cloudinary.uploader.upload(image);

		await Post.create({
			creator,
			prompt,
			image: imgUrl.url,
			hashtag,
		});
		res.status(201).json({ success: true, message: 'Post created' });
	} catch (err) {
		res.status(500).json({ success: false, message: err });
	}
});

router.route('/comment').post(async (req, res) => {
	try {
		const { postId, user, comment } = req.body;

		await Comment.create({
			postId,
			user,
			comment,
		});
		res.status(201).json({ success: true, message: 'Comment created' });
	} catch (err) {
		res.status(500).json({ success: false, message: err });
	}
});

router.route('/comment/:postId').get(async (req, res) => {
	const postId = req.params.postId;
	try {
		const comments = await Comment.find({ postId });
		if (comments.length === 0) {
			return res
				.status(404)
				.json({ success: false, message: 'No comments found' });
		}
		res.status(200).json({ success: true, data: comments });
	} catch (err) {
		res.status(500).json({ success: false, message: err });
	}
});

export default router;
