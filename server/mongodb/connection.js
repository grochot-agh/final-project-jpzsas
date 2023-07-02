import mongoose from 'mongoose';

//setting connection to mongodb
const conectToDb = (url) => {
	mongoose.set('strictQuery', true);
	mongoose
		.connect(url)
		.then(() => console.log('Db connected'))
		.catch((err) => console.log(err));
};

export default conectToDb;
