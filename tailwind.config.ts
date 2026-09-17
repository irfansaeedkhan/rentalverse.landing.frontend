import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    screens: {
      sm: "768px",
      md: "1150px",
      lg: "1280px",
      xl: "1440px",
      "2xl": "1680px",
      maxmobile: { max: "767px" },
    },
    backgroundImage: {
      "gradient-pattern": "linear-gradient(90deg, #00FF94 0%, #00A3FF 100%)",
    },
    extend: {
      colors: {
        primary: "#05121E",
        "primary-light": "#0E1F30",
        "primary-dark": "#05121E",
        green: "#00FF94",
        yellow: "#FFBC39 ",
      },
      fontFamily: {
        nexa1: ["var(--font-nexa-regular)", "sans-serif"],
        kanit: ["var(--font-kanit)", "sans-serif"],
        nexa: ["var(--font-nexa-regular)", "sans-serif"],
        nexathin: ["var(--font-nexa-light)", "sans-serif"],
        nexaheavy: ["var(--font-nexa-heavy)", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
