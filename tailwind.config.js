/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'source-code': ['"Source Code Pro"', 'monospace'],
      },
      colors: {
        accent: '#6366f1',
      },
    },
  },
  plugins: [],
}