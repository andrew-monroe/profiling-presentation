/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
			fontSize: {
			  'xs': '1.125rem',    // 18px
			  'sm': '1.25rem',     // 20px
			  'base': '1.5rem',    // 24px
			  'lg': '1.875rem',    // 30px
			  'xl': '2.25rem',     // 36px
			  '2xl': '3rem',       // 48px
			  '3xl': '4rem',       // 64px
			  '4xl': '5rem',       // 80px
			  '5xl': '6rem',       // 96px
			  '6xl': '8rem',       // 128px
			},
	},
	plugins: [],
}
