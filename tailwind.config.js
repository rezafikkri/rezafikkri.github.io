/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "ajwa-green": "#72C71D",
      },
    },
    listStyleType: {
      minus: '"\\2d\\20"',
    },
  },
  plugins: [],
}
