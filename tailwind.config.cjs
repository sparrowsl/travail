/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			fontFamily: {
				"pt-sans": ["PT Sans", "sans-serif"],
				raleway: ["Raleway", "sans-serif"]
			}
		}
	},
	plugins: []
};
