import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#031f46",
          800: "#062b5f",
          700: "#073877"
        },
        paris: {
          red: "#cf0616",
          blue: "#6fa9dc",
          ink: "#061b3b"
        },
        gold: "#D4AF37",
        cream: "#FAFAFA"
      },
      boxShadow: {
        club: "0 24px 70px rgba(3, 31, 70, 0.20)"
      },
      fontFamily: {
        sans: ["Montserrat", "Avenir Next", "Arial", "sans-serif"],
        display: ["Oswald", "Arial Narrow", "sans-serif"],
        serif: ["'Playfair Display'", "serif"],
        script: ["'Dancing Script'", "cursive"]
      },
      borderRadius: {
        sm: "2px"
      }
    }
  },
  plugins: []
};

export default config;
