import { randomPrompts } from '../constants';
import FileSaver from 'file-saver';

//random prompt for OpenAi api
export function getRandomPrompt(prompt) {
	const rndIndex = Math.floor(Math.random() * randomPrompts.length);
	const rndPrompt = randomPrompts[rndIndex];

	if (rndPrompt === prompt) return getRandomPrompt(prompt);

	return rndPrompt;
}

//download file and save as jpg
export async function downloadImage(id, image) {
	FileSaver.saveAs(image, `artify-${id}.jpg`);
}
