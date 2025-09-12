/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      maxWidth: { "6xl": "72rem" } // optional: fixes your max-w-6xl warning
    }
  },
  plugins: []
};
