/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './assets/**/*.css'],
  theme: {
    extend: {
      colors: {
        cloud9: {
          50: "#B7E1D9",
          100: "#A9DBD2",
          200: "#9AD5CA",
          300: "#8CCFC3",
          400: "#7EC9BB",
          500: "#6FC3B3",
          600: "#61BDAC",
          700: "#52B7A4",
          800: "#48AD9A",
          900: "#429E8D", 
        },
        moonstone: "#6C969D",
        skyblue: "#429EB9",
        honolulu: "#197CB4",
        contrast: "#8B5D33",
        flame: "#E4572E",
        mustard: "#FFC914"
      }
    },
  },
  plugins: [],
}
