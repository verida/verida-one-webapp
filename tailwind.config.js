/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "primary": "#ffffff",
      "primary-inverse": "#000000",
      "background": "#0D0A27",
      "translucent": "rgba(17, 17, 17, 0.2)",
      "transparent": "rgba(255, 255, 255, 0)",
      "primary-5": "rgba(255, 255, 255, 0.05)",
      "primary-10": "rgba(255, 255, 255, 0.10)",
      "primary-15": "rgba(255, 255, 255, 0.15)",
      "gray": "rgba(255, 255, 255, 0.05)",
      "gray-dark": "rgba(255, 255, 255, 0.15)",
      "background-button": "rgba(255, 255, 255, 0.15)",
      "background-button-hover": "rgba(255, 255, 255, 0.3)",
      "white": "#ffffff",
      "black": "#000000",
      "error": "#CE4B46",
      "green": "#13ce66",
      "gray-light": "#9D9D9D",
      "badge-purple": "#7703D1",
      "verida-blue": "#37D5C7",
      "verida-purple": "#5354D1",
    },
    fontFamily: {
      sans: ["Sora", "sans-serif"],
    },
    extend: {
      screens: {
        sm: "696px",
      },
      spacing: {
        4.5: "1.125rem",
      },
      backdropBlur: {
        xs: "3px",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
