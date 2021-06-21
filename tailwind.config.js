const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        tarent: {
          red: '#cc0000',
          'red-700': '#aa0000',
          black: '#333333',
        },
      },
      fontFamily: {
        sans: [ '"Ubuntu"', ...defaultTheme.fontFamily.sans ],
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
