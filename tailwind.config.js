module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      Epilogue: ['Epilogue', 'san-serif'],
    },
    extend: {
      color: {
        greyish: 'hsl(0, 0%, 41%)',
      }
    },
  },
  plugins: [],
}
