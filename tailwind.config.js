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
        5: "5",
        "-10": "-10",
      },
      transitionProperty: {
        backdropFilter: "backdrop-filter",
      },
      minHeight: theme => ({
        ...theme('spacing')
      })
    },
  },
  variants: {
    extend: {
      margin: ["hover"],
    },
  },
  plugins: [],
};
