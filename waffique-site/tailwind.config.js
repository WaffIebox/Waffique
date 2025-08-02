/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
  "./index.html",
  "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {
      colors: {
        darkGray: '#181818',
        darkBlue: '#272757',
        brightYellow: '#FFEF00',
      },
    },
  },
  plugins: [],
}