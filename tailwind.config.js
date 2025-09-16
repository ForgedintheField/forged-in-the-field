/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0f1111",         // near-black charcoal
        text: "#f3f3f1",       // bone
        accent: "#7a4a2b",     // saddle/leather
        accent2: "#c89a6b",    // light leather
        muted: "#6a6a6a",
        card: "#121415",
        stroke: "#1e1f20",
      },
      borderRadius: {
        brand: "10px",
      },
      boxShadow: {
        brand: "0 10px 30px rgba(0,0,0,.35)",
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Inter",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "Apple Color Emoji",
          "Segoe UI Emoji",
        ],
      },
    },
  },
  plugins: [],
}