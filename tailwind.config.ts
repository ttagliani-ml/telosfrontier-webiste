import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#0E0E10",
        graphite: "#17181C",
        line: "#2A2B31",
        smoke: "#9A9DA6",
        chrome: "#C9CCD3",
        bright: "#F1F2F5",
        cyan: { DEFAULT: "#22E4FF", deep: "#00B8D4" },
      },
      fontFamily: {
        display: ["Unbounded", "system-ui", "sans-serif"],
        body: ['"DM Sans"', "system-ui", "sans-serif"],
      },
      maxWidth: { page: "1360px" },
    },
  },
  plugins: [],
} satisfies Config;
