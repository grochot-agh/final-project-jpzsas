import mongoose from 'mongoose';

const Post = new mongoose.Schema({
	creator: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	},
	prompt: { type: String, required: true },
	image: { type: String, required: true },
	hashtag: { type: String, required: true },
});

const PostSchema = mongoose.model('Post', Post);

export default PostSchema;
