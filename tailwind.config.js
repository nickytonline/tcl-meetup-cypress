const colors = require('tailwindcss/colors');

module.exports = {
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Staatliches: ['Staatliches', 'sans-serif'],
        Exo: ['Exo', 'sans-serif'],
        Inconsolata: ['Inconsolata', 'sans-serif'],
        Karma: ['Karma', 'sans-serif'],
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
        teal: colors.teal,
        blue: colors.blue,
        sky: colors.sky,
        green: colors.green,
        gray: colors.gray,
        yellow: colors.yellow,
        amber: colors.amber,
        mostlyBlack: '#080404',
        black: colors.black,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
