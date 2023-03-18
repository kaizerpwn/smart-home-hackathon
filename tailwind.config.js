/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      xs: '320px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        primaryColor: "#A78BFA",
        secondaryColor: "#7d54f8",
        whiteSoft: "#F7EBFF",
        greenSoft: "#005243"
      }
    },
  },
  plugins: [],
}