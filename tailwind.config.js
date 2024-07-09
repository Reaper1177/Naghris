/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      '3xl': '10px 10px 10px 10px rgba(0, 0, 0, 0.9)',
    },
    fontFamily: {
      roboto: ['Roboto'],
      poppins: ['Poppins'],
      lato: ['Lato'],
      muli: ['Mulish'],
    }
  },
  variants: {
    display:['group-hover']
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
  
}