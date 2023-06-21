import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectToDb from './mongodb/connection.js';
import postRoutes from './routes/postroutes.js';
import aiRoutes from './routes/airoutes.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use('/api/v1/post', postRoutes);
app.use('/api/v1/ai', aiRoutes);
app.use('/user', userRoutes);

const PORT = 8000;

app.get('/', async (req, res) => {
	res.send('Backend is running');
});

const startServer = async () => {
	try {
		connectToDb(process.env.MONGODB_URL);
		app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
	} catch (err) {
		console.log(err);
	}
};

startServer();
