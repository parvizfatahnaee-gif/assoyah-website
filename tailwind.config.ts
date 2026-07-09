import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F8F6F1",
        beige: "#EAE0CF",
        charcoal: "#1C1A17",
        stone: "#6B6560",
        terracotta: "#B5502D",
        ochre: "#C68A3E",
        indigo: "#2E3A59",
        clay: "#9C4A2E",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-manrope)", "sans-serif"],
      },
      letterSpacing: {
        wider2: "0.18em",
        wider3: "0.28em",
      },
      maxWidth: {
        content: "1400px",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
