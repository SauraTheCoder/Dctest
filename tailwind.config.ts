import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#012060",
          navydark: "#001642",
          navysoft: "#0B2D77",
          blue: "#0071C1",
          bluehover: "#0084E0",
          cyan: "#00A2FF",
          ice: "#E8F4FC",
          ice50: "#F3F9FD",
          graybg: "#F8FAFC",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        brand: "0 10px 25px -5px rgba(1, 32, 96, 0.1), 0 8px 10px -6px rgba(1, 32, 96, 0.05)",
        card: "0 2px 10px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)",
        glow: "0 0 20px rgba(0, 113, 193, 0.25)",
      },
      keyframes: {
        pulseSlow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        }
      },
      animation: {
        "pulse-slow": "pulseSlow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 4s ease-in-out infinite",
      }
    },
  },
  plugins: [],
};
export default config;
