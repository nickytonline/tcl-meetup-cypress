const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js, jsx, ts, tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Staatliches: ['Staatliches', 'sans-serif'],
        Exo: ['Exo', 'sans-serif'],
        Inconsolata: ['Inconsolata', 'sans-serif'],
      },
      colors: {
        stone: colors.stone,
        rose: colors.rose,
        orange: colors.orange,
        indigo: colors.indigo,
        purple: colors.purple,
        emerald: colors.emerald,
        violet: colors.violet,
        cyan: colors.cyan,
        blue: colors.blue,
        sky: colors.sky,
        green: colors.green,
        gray: colors.gray,
        yellow: colors.yellow,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
