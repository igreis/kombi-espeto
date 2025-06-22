/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'h800': { 'raw': '(min-height: 800px)' }, // Define breakpoint para altura
        'h930': { 'raw': '(min-height: 930px)' }, // Define breakpoint para altura
      },
    },
  },
  plugins: [],
}