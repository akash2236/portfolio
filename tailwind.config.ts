// Tailwind v4 — theme is configured via @theme in globals.css
// This file is kept for tooling compatibility and documentation purposes.
// All design tokens (colors, fonts, animations) are defined in src/app/globals.css.
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-bg": "#080A0F",
        "dark-secondary": "#10141D",
        "dark-card": "#141A25",
        accent: "#4385FF",
        violet: "#9067FF",
        cyan: "#39D9F2",
        "text-primary": "#F5F7FC",
        "text-secondary": "#A0A9B8",
        "border-subtle": "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(67,133,255,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(67,133,255,0.6)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "grid-move": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "60px 60px" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "grid-move": "grid-move 4s linear infinite",
      },
      maxWidth: {
        container: "80rem",
      },
    },
  },
  plugins: [],
};

export default config;
