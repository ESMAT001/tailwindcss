module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        new:[
          "'Nunito'",
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"'
        ]
      }
      ,
      transitionProperty: {
        'height': 'height'
        // 'spacing': 'margin, padding',
       }
    },
  },
  variants: {
    extend: {
      transitionProperty: ['hover', 'focus']
    },
  },
  plugins: [],
}
