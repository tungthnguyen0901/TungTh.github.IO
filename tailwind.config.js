/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor: '#0A001F',
        customColorMid: '#280080',
        customColorHigh: '#4900e6', // You can adjust this as needed for the gradient
      }
    },
  },
  plugins: [],
}
