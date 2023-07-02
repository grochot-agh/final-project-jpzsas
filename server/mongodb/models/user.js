import mongoose from 'mongoose';

//saving the user data to the database
const User = new mongoose.Schema({
	email: { type: String, required: true, unique: true },
	login: { type: String, required: true, unique: true },
	password: {
		type: String,
		required: true,
	},
});

const UserSchema = mongoose.model('User', User);

export default UserSchema;
