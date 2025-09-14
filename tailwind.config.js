/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          900: "#2B2A27",
          700: "#4A473F",
          500: "#8B7D65",
          300: "#C1B49A",
          accent: "#B86B35"
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-header)', 'ui-serif', 'Georgia']
      },
      spacing: { 13: "3.25rem", 15: "3.75rem" }
    }
  },
  plugins: []
};