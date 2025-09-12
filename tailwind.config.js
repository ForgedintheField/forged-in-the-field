/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Extend or override defaults if you need custom values later
      maxWidth: {
        '7xl': '80rem', // matches Tailwind’s default for 7xl (80rem = 1280px)
      },
      colors: {
        brandBlue: '#1e40af', // optional custom color
      },
    },
  },
  plugins: [],
};