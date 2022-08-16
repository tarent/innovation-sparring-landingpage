const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: (theme) => ({
        'screen-9/10': '90vh',
      }),
      colors: {
        tarent: {
          red: '#cc0000',
          'red-700': '#aa0000',
          black: '#333333',
        },
        logo: {
          gray: '#f1f1f1',
        }
      },
      fontFamily: {
        sans: ['"Ubuntu"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: { display: ['responsive', 'hover', 'focus'] },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
