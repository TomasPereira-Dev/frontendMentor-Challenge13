/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.jsx"
  ],
  theme: {
    extend: {
        backgroundImage: {
          darkmode1: "url('./src/assets/bg-mobile-dark.jpg')",
          darkmode2: "url('./src/assets/bg-desktop-dark.jpg')",
          lightmode1: "url('./src/assets/bg-mobile-light.jpg')",
          lightmode2: "url('./src/assets/bg-desktop-light.jpg')"
        },
        backgroundColor: {
          darkBlue1: "hsl(235, 21%, 11%)",
          darkBlue2: "hsl(235, 24%, 19%)",
          lightGrayishBlue1: "hsl(234, 39%, 85%)",
          lightGrayishBlue2: "hsl(236, 33%, 92%)",
          lightGrayishBlue3: "hsl(236, 33%, 92%)",
          lightGrayishBlue4: "hsl(233, 11%, 84%)",
          darkGrayishBlue1: "hsl(234, 11%, 52%)",
          darkGrayishBlue2: "hsl(233, 14%, 35%)",
          darkGrayishBlue3: "hsl(237, 14%, 26%)",
          lightGray1: "hsl(0, 0%, 98%)",


        },
        fontFamily: {
          sans: "'Josefin Sans', sans-serif"
        },
        textColor: {
          lightGrayishBlue1: "hsl(234, 39%, 85%)",
          lightGrayishBlue2: "hsl(236, 33%, 92%)",
          darkGrayishBlue1: "hsl(234, 11%, 52%)",
          darkGrayishBlue2: "hsl(233, 14%, 35%)",
          darkGrayishBlue3: "hsl(236, 9%, 61%)",
          darkGrayishBlue4: "hsl(235, 19%, 35%)"
        },
        letterSpacing: {
          letterSpacing1: "1ch"
        },
        borderColor: {
          darkGrayishBlue1: "hsl(234, 11%, 52%)",
          darkGrayishBlue2: "hsl(233, 14%, 35%)"
        },
        caretColor: {
          brightBlue: "hsl(220, 98%, 61%)",

        }
    }
  },
  darkMode: "class",
  plugins: []
}

