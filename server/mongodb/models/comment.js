import mongoose from 'mongoose';

//saving the commments to the database
const Comment = new mongoose.Schema({
	postId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Post',
		required: true,
	},
	user: {
		type: String,
		default: 'Anonymous',
		required: true,
	},
	comment: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
		required: true,
	},
});

const CommentSchema = mongoose.model('Comment', Comment);

export default CommentSchema;
