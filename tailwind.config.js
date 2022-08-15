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
      },
      maxWidth: {
        container: '1260px'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
