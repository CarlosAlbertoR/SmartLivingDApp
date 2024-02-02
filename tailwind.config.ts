import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      inter: "'Inter', sans-serif",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    colors: {
      current: "currentColor",
      transparent: "transparent",
      white: "#FFFFFF",
      black: "#080321",
      dark: "#131B4D",
      primary: "#3E7DFF",
      "body-color": "#B5B3BC",
      "body-color-2": "#637381",
      "gradient-1": "#E4F2FE",
      "gradient-2": "#FFEEFE",
      "light-bg": "#F5F8FF",

      gray: {
        50: "#F9FAFB",
        100: "#F3F4F6",
        200: "#E5E7EB",
        300: "#D1D5DB",
        400: "#9CA3AF",
        500: "#6B7280",
        600: "#4B5563",
        700: "#374151",
        800: "#1F2937",
        900: "#111827",
      },
      green: {
        50: "#E6FFE6",
        100: "#B3FFB3",
        200: "#80FF80",
        300: "#4DFF4D",
        400: "#1AFF1A",
        500: "#00E600",
        600: "#00B300",
        700: "#008000",
        800: "#004D00",
        900: "#001A00",
      },
      red: {
        50: "#FFEBEB",
        100: "#FFC3C3",
        200: "#FF9797",
        300: "#FF6B6B",
        400: "#FF4545",
        500: "#FF1E1E",
        600: "#E91010",
        700: "#CF0000",
        800: "#B50000",
        900: "#9B0000",
      },
    },
    screens: {
      sm: "540px", // => @media (min-width: 540px) { ... }
      md: "768px", // => @media (min-width: 768px) { ... }
      lg: "992px", // => @media (min-width: 992px) { ... }
      xl: "1140px", // => @media (min-width: 1200px) { ... }
      "2xl": "1320px", // => @media (min-width: 1400px) { ... }
    },
    extend: {
      boxShadow: {
        "primary-hover": "0px 11px 20px rgba(139, 92, 246, 0.2)",
        "black-hover": "0px 11px 30px rgba(7, 16, 45, 0.15)",
        award: "0px 3px 100px rgba(11, 5, 22, 0.07)",
        testimonial: "0px 5px 50px rgba(178, 152, 236, 0.05)",
        faq: "0px 4px 50px rgba(0, 0, 0, 0.03)",
        "shape-1": "0px 0px 100px rgba(0, 0, 0, 0.03)",
        sticky: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)",
      },
      dropShadow: {
        image: "25px 40px 100px rgba(0, 0, 0, 0.1)",
      },
      zIndex: {
        "-1": "-1",
      },
    },
  },
  plugins: [],
};
export default config;
