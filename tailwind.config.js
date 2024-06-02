/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      screens: {
        sm: { min: '500px' },
        md: { min: '768px' },
        lg: { min: '900px' },
        xl: { min: '1200px' },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "4.75rem"
        }
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    },
    require('flowbite/plugin')
  ],
}

