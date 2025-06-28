/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
      },
      animation: {
        float: 'float 2s ease-in-out infinite',
      },
      screens: {
        'h800': { 'raw': '(min-height: 800px)' }, // Define breakpoint para altura
        'h930': { 'raw': '(min-height: 930px)' }, // Define breakpoint para altura
        'h720': { 'raw': '(min-height: 720px)' }, // Define breakpoint para altura
      },
    },
  },
  plugins: [],
}