// tailwind.config.js
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Cormorant Garamond", "serif"],
      },
      colors: {
        // Primary brand colors
        crochetPrimary: {
          DEFAULT: "#F4A261", // Terracotta (buttons/accents)
          100: "#FEF3E7", // Light cream (backgrounds)
          200: "#F0E2D1", // Medium cream (borders)
          300: "#d4c9bc", // Light brown
          400: "#b8a896", // Medium brown
          500: "#F4A261", // Main orange-terracotta
          700: "#E07D22", // Dark terracotta (hover states)
          600: "#8a765e", // Medium brown
          800: "#5f4f3d", // Dark brown
        },
        // Complementary colors
        crochetSecondary: {
          400: "#A8B8A5", // Sage green (headings)
          600: "#6E8B6E", // Dark sage (important text)
        },
        // Neutral text colors
        crochetText: {
          700: "#4B5563", // Main text (gray-700)
          900: "#1F2937", // Strong headings (gray-900)
        },
      },
    },
  },
  plugins: [],
});
