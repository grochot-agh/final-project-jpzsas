import { randomPrompts } from '../constants';
import FileSaver from 'file-saver';

export function getRandomPrompt(prompt) {
	const rndIndex = Math.floor(Math.random() * randomPrompts.length);
	const rndPrompt = randomPrompts[rndIndex];

	if (rndPrompt === prompt) return getRandomPrompt(prompt);

	return rndPrompt;
}

export async function downloadImage(id, image) {
	FileSaver.saveAs(image, `artify-${id}.jpg`);
}
