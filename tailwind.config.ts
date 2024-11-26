import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.5s ease",
        gradient: "gradientColors 5s ease infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        gradientColors: {
          "0%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" },
        },
      },
      borderRadius: {
        lg: "1.5rem",
      },
      colors: {
        background: "var(--background)",
        textPrimary: "var(--text-primary)",
        textSecondary: "var(--text-secondary)",
        textDisabled: "var(--text-disabled)",
        textHover: "var(--text-hover)",
        cardBackground: "var(--card-background)",
        cardShadow: "var(--card-shadow)",
        buttonShadow: "var(--button-shadow)",
      },
    },
  },
  plugins: [],
} satisfies Config;
