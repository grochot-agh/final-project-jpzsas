import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';
import PostSchema from '../mongodb/models/post.js';

dotenv.config(); //load variables from .env file

const router = express.Router(); 

const configuration = new Configuration({ //create new configuration object
	apiKey: process.env.OPENAI_API_KEY, //use global variable- OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration); //create new OpenAIApi object

router.route('/').get((req, res) => { //define route
	res.send('AI route is running');
});

router.route('/').post(async (req, res) => {
	try {
		const { prompt } = req.body;

		//create image using openai api
		const response = await openai.createImage({
			prompt,
			n: 1,
			size: '1024x1024',
			response_format: 'b64_json',
		});

		const image = response.data.data[0].b64_json; 

		res.status(200).json({ image: image });
	} catch (error) {
		console.error(error);
		res
			.status(500)
			.send(error?.response.data.error.message || 'Something went wrong');
	}
});

export default router;
