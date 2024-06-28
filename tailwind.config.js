// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dgray': '#11212d',
        'gray': '#4a5c6a',
        'mgray': '#9babab',
        'lgray': '#ccd0cf',
      },
      fontFamily: {
        'mono': ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
