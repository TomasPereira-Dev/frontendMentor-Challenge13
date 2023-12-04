/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.jsx"
  ],
  theme: {
    extend: {
        backgroundImage: {
          darkmode1: "url('./src/assets/bg-mobile-dark.jpg')"
        },
        backgroundColor: {
          darkBlue1: "hsl(235, 21%, 11%)",
          darkBlue2: "hsl(235, 24%, 19%)",
          lightGrayishBlue1: "hsl(234, 39%, 85%)",
          lightGrayishBlue2: "hsl(236, 33%, 92%)",
          darkGrayishBlue1: "hsl(234, 11%, 52%)",
          darkGrayishBlue2: "hsl(233, 14%, 35%)",
          darkGrayishBlue3: "hsl(237, 14%, 26%)"

        },
        fontFamily: {
          sans: "'Josefin Sans', sans-serif"
        },
        letterSpacing: {
          letterSpacing1: "1ch"
        }
    },
  },
  plugins: [],
}

