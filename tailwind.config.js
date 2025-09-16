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
        // Brand palette
        bg: "#1c1b19",        // Deep charcoal background
        surface: "#2a2926",   // Slightly lighter panels
        text: "#f5f3eb",      // Warm off-white
        muted: "#b3aea3",     // Secondary text
        accent: "#c9671e",    // Burnt orange (upland/leather)
        accent2: "#e0a257",   // Tan highlight
        border: "#3d3b37",    // Subtle divider
        success: "#7fb069",   // Optional success state
        error: "#d26a5c",     // Optional error state
      },
      fontFamily: {
        heading: ["Oswald", "Impact", "Arial Black", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        brand: "12px",
      },
      boxShadow: {
        brand: "0 12px 34px rgba(0,0,0,.35)",
      },
      fontSize: {
        base: ["20px", { lineHeight: "1.8" }], // Larger default body
        "body-lg": ["1.25rem", { lineHeight: "1.75" }], // ~20px large body text
        "heading-lg": ["2.5rem", { lineHeight: "1.15" }], // ~40px
        "heading-xl": ["3rem", { lineHeight: "1.1" }], // ~48px
        "heading-2xl": ["clamp(3.5rem,6vw,4.5rem)", { lineHeight: "1.05" }], // Responsive hero (~56-72px)
      },
      maxWidth: {
        content: "1152px", // Consistent content width
      },
    },
  },
  plugins: [],
};