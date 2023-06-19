import express from 'express';
import * as dotenv from 'dotenv';
const axios = require('axios');

dotenv.config();

const router = express.Router();

router.route('/').get((req, res) => {
	res.send('AI route is running');
});

router.route('/ai', async (req, res) => {
	const { prompt } = req.body;
	const options = {
		method: 'POST',
		url: 'https://openai80.p.rapidapi.com/images/generations',
		headers: {
			'content-type': 'application/json',
			'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
			'X-RapidAPI-Host': 'openai80.p.rapidapi.com',
		},
		data: {
			prompt,
			n: 1,
			size: '1024x1024',
			response_format: 'b64_json',
		},
	};

	try {
		const response = await axios.request(options);
		const image = response.data.data[0].b64_json;

		res.status(200).json({ image: image });
		console.log(response.data);
	} catch (err) {
		console.error(err);
        res.status(500).send(err?response.data.err.message);
	}
});

export default router;
