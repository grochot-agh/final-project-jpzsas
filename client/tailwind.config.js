/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,jsx}', './public/index.html'],
	darkMode: 'class',
	theme: {
		extend: {
			screens: {
				xs: '480px',
				sl: '1134px',
			},
			fontFamily: {
				bauhaus: ['Bauhaus 93', 'sans-serif'],
			},
			boxShadow: {
				'nav-link': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
			},
		},
	},
	plugins: [],
};
