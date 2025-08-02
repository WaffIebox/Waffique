/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBlue: '#90D5FF',
        darkBlue: '#272757',
        brightYellow: '#FFEF00',
      },
    },
  },
  plugins: [],
}