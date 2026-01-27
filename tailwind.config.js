/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#1B8E5D',
          dark: '#136746',
          light: '#2FC689'
        }
      }
    }
  },
  plugins: []
}
