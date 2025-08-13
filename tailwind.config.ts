import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#5b8def",
          dark: "#3f6fd6",
        },
        card: {
          DEFAULT: "hsl(0 0% 100%)",
          dark: "hsl(222.2 84% 4.9%)"
        }
      },
      boxShadow: {
        soft: "0 2px 10px rgba(0,0,0,0.06)",
      },
      borderRadius: {
        xl2: "1rem"
      }
    },
  },
  plugins: [],
};
export default config;
