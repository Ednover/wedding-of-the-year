/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'header-img': "url('/public/img/background-portada.webp')",
			}
		},
	},
	plugins: [],
}
