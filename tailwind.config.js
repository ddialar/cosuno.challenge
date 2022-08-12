/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'blue-main': '#265ac9',
        'gray-main': '#f8fafc'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
