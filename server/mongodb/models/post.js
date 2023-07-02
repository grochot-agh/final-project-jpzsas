import mongoose from 'mongoose';

//saving the post to the database
const Post = new mongoose.Schema({
	creator: {
		type: String,
		required: true,
	},
	prompt: { type: String, required: true },
	image: { type: String, required: true },
	hashtag: { type: String, required: true },
	numberOfLikes: { type: Number, default: 0 },
	likes: [
		{
			type: String,
		},
	],
});

const PostSchema = mongoose.model('Post', Post);

export default PostSchema;
