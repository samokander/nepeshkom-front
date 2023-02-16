/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
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
    },
    extend: {},
  },
  plugins: [],
};
