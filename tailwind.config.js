module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './component/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'white-custom': '#F5F5F5',
      },
      textColor: {
        'blue-custom': '#008FFF',
        'black-custom': '#5C5C5C',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
