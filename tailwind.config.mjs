/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
			fontSize: {
			  'xs': '0.875rem',    // 14px
			  'sm': '1rem',        // 16px
			  'base': '1.125rem',  // 18px
			  'lg': '1.25rem',     // 20px
			  'xl': '1.5rem',      // 24px
			  '2xl': '1.875rem',   // 30px
			  '3xl': '2.25rem',    // 36px
			  '4xl': '3rem',       // 48px
			  '5xl': '4rem',       // 64px
			  '6xl': '5rem',       // 80px
			},
	},
	plugins: [],
}
