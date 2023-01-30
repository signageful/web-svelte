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
					'50': '#f0f4fe',
                    '100': '#dce6fd',
                    '200': '#c2d5fb',
                    '300': '#97baf9',
                    '400': '#6697f4',
                    '500': '#3567ed',
                    '600': '#2d52e3',
                    '700': '#2540d0',
                    '800': '#2435a9',
                    '900': '#223186',
				},
                blue: {
					'50': '#f0f4fe',
                    '100': '#dce6fd',
                    '200': '#c2d5fb',
                    '300': '#97baf9',
                    '400': '#6697f4',
                    '500': '#3567ed',
                    '600': '#2d52e3',
                    '700': '#2540d0',
                    '800': '#2435a9',
                    '900': '#223186',
				},
				dark: '#192132',
				body: colors.slate[900]
			}
		}
	},
	plugins: [require('@tailwindcss/typography'), require('flowbite/plugin')]
};
