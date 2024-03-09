/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./my-app/**/*.{html,js}",
    "./src/components/**/*.{html,js}",
    "./src/**/*.{html,js}",

  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ClashDisplay-Regular', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        tomato: '#E50914',
        marigold: '#F5C518',
      },
    },
  },
  plugins: [],
}