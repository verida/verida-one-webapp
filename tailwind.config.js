/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "white": "#ffffff",
      "black": "#0000",
      "error": "#CE4B46",
      "green": "#13ce66",
      "gray-dark": "rgba(255, 255, 255, 0.15);",
      "gray-light": "#9D9D9D",
      "background": "#0D0A27",
      "verida-blue": "#37D5C7",
      "verida-purple": "#5354D1",
      "transparent": `rgba(17, 17, 17, 0.2)`
    },
    fontFamily: {
      sora: ['Sora', 'sans-serif']
    },
    extend: {
      backdropBlur: {
        xs: '3px',
      }
    },
  },
  plugins: [],
};
