/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			transparent: "transparent",
			black: "#0000000",
			white: "#ffffff",
			error: "#FF4E4E",
			background: "#161616",
			primary: "#D92B26",
			secondary: "#5A606B",
			gray: "#F5F5F5",
			darkgray: "#242424",
			halfblack: "rgba(255, 255, 255, 0.5)",
			halfwhite: "rgba(0, 0, 0, 0.5)",
			slightblack: "rgba(255, 255, 255, 0.2)",
			background02: "rgba(22,22,22,0.2)",
			superdarkgray: "#919191",
			lightgray: "#F5F5F5",
			tint: "rgba(0, 0, 0, 0.35)",
			shadeofgrey: "#D6D6D6",
			b_lightgray: "#5B5B5B",
		},
		letterSpacing: {
			tightest: "-.075em",
			tighter: "-.05em",
			tight: "-.01em",
			normal: "0",
			wide: ".01em",
			wider: ".05em",
			widest: ".1em",
			widest: ".25em",
		},
		screens: {
			phone: "440px",
			md: "768px",
		},
		extend: {
			fontFamily: {
				raleway: ["Raleway", "sans-serif"],
			},
		},
	},
	plugins: [],
};
