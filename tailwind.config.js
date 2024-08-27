//https://tailwindcss.com/docs/guides/nuxtjs
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./app.vue",
		"./error.vue",
	],
	theme: {
		extend: {
			colors: {
				flame: {
					pink: {
						start: "#ff4e50",
						end: "#fe2978",
						DEFAULT: "#ff3c64",
					},
					white: "#ffffff",
					black: "#000000",
					black1: "#313131",
					black2: "#414040",
					blue: "#339dff",
					purple: "#7266ff",
					purple1: "#9747ff",
					grey: "#969696",
					grey1: "#dddddd",
					grey2: "#ededed",
					grey3: "#b9b9b9",
					grey4: "#f5f5f5",
					yellow: "#ffc01f",
				},
			},
			backgroundImage: {
				"pink-flame": "linear-gradient(#ff4e50, #fe2978)",
			},
		},
	},
	plugins: [
		//require('@tailwindcss/forms'),
	],
};
