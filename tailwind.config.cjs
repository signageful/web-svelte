const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
        './src/**/*.{html,js,svelte,ts}',
        "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
    ],
	theme: {
		fontFamily: {
			sans: ['Questrial', 'sans-serif']
		},
		extend: {
			height: {
				nav: 80,
				splash: 'calc(100vh - 80px)'
			},
			colors: {
				primary: {
					50: '#eef8ff',
					100: '#dcf0ff',
					200: '#b2e3ff',
					300: '#6dcdff',
					400: '#20b3ff',
					500: '#009aff',
					600: '#0079df',
					700: '#0060b4',
					800: '#005294',
					900: '#003866'
				},
				dark: '#192132',
				body: colors.slate[900]
			}
		}
	},
	plugins: [require('@tailwindcss/typography'), require('flowbite/plugin')]
};
