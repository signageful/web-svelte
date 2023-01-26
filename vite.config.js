import { sveltekit } from '@sveltejs/kit/vite';
import { VitePluginFonts } from 'vite-plugin-fonts';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		VitePluginFonts({
			google: {
				families: ['Questrial']
			}
		})
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;
