module.exports = {
  mode : 'jit',
  purge: ['./public/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens:{
      'sm': {'max': '568px'},
      'md': {'max': '768px'},
      'lg': {'min': '768px', 'max': '1240px'},
      'xl' : {'max' : '1240px'},
      '2xl': {'min': '1536px'},
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
