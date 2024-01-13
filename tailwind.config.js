/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#212529',
        'font': '#ebebeb',
        'second': '#00f7d2',
      }
    }
  },
  plugins: [],
}