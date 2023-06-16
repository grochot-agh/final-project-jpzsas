import { randomPrompts } from '../constants';

export function getRandomPrompt(prompt) {
	const rndIndex = Math.floor(Math.random() * randomPrompts.length);
	const rndPrompt = randomPrompts[rndIndex];

	if (rndPrompt === prompt) return getRandomPrompt(prompt);

	return rndPrompt;
}
