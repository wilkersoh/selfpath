// const defaultTheme = require("tailwindcss/defaultTheme");
// const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        heading: ["NunitoExBold", "Helvetica Neue", "sans-serif"],
      },
      colors: {
        "brand-green": "#a3f8c3",
        "brand-red": "#ff0a78",
        "brand-black": "#0d141c",
      },
      zIndex: {
        "-10": "-10",
      },
      fontSize: {
        // bs: ['0.75rem', { lineHeight: '1rem' }],
      },
    },
  },
  variants: {
    extend: {
      margin: ["first", "responsive"],
    },
  },
  plugins: [],
};
