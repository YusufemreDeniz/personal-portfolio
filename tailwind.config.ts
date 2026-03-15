import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#070B10",
        surface: "#0C141D",
        line: "rgba(255,255,255,0.1)",
        brand: {
          DEFAULT: "#45D0A7",
          soft: "#7DE6C4"
        },
        accent: "#66A8FF"
      },
      boxShadow: {
        "soft-glow": "0 12px 50px rgba(69, 208, 167, 0.18)"
      },
      backgroundImage: {
        "radial-noise":
          "radial-gradient(circle at 15% 20%, rgba(102,168,255,0.16), transparent 42%), radial-gradient(circle at 80% 10%, rgba(69,208,167,0.12), transparent 38%), radial-gradient(circle at 50% 85%, rgba(255,255,255,0.06), transparent 42%)"
      }
    }
  },
  plugins: []
};

export default config;
