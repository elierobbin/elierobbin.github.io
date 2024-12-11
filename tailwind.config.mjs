/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundColor: {
				'background': '#f2f0df',
				'black-50': 'rgba(0, 0, 0, 0.75)',
			},
		},
	},
	plugins: [],
}
