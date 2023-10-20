const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./dist/**/*.{html,js}"],
 darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white:colors.white,
      neutral:colors.neutral,
      gray: colors.gray,
      blue:colors.blue,
      yellow:colors.yellow,
      orange: colors.orange,
      red:colors.red,
      green: colors.green,
      pink: colors.pink,
      rose: colors.rose,
      sky: colors.sky,
      teal: colors.teal,
      amber: colors.amber
    },
    extend: {
      colors: {
        primary: "#32cd32"
      },
      fontFamily: {},
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ],
}

