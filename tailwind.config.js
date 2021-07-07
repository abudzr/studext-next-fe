const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './component/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Quicksand', 'sans-serif', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'white-custom': '#F5F5F5',
        'yellow-custom': '#FFCD00',
        'green-custom': '#53BAC1',
        'orange-custom': '#EBA468',
        'tosca': '#53BAC1',
      },
      textColor: {
        'blue-custom': '#008FFF',
        'black-custom': '#5C5C5C',
      },
      backgroundImage: {
        'rating': "url('/image/pattern.png')",
      },
      backgroundSize: {
        '100%': ['100%', '30%'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
        'circle': {
          'width': 'max-content',
          'height': '1.5rem',
        },
      }
      addUtilities(newUtilities)
    })
  ],
}
