import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Home',
			social: {
				github: 'https://portal.azure.com/#home',
			},
			sidebar: [
				{
					label: 'Azure Web App',
					autogenerate: { directory: 'azure web app', },
				},
				{
					label: 'Function App',
					autogenerate: { directory: 'function app' },
				},
			],
			customCss: ['./src/tailwind.css'],
		}),
		tailwind({ applyBaseStyles: false }),
	],
});
