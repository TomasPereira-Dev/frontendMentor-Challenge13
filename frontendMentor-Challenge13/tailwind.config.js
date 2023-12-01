/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*/.{js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "'Josefin Sans', sans-serif" 
      },
      textColor: {
        lightgGray: "hsl(0, 0%, 98%)",
      },
      gradientColorStops: {
        gradient1: "hsl(192, 100%, 67%)",
        gradient2: "hsl(280, 87%, 65%)"
      },
      backgroundColor: {
        brightBlue: "hsl(220, 98%, 61%)",
        lightgGrayBlue1: "hsl(236, 33%, 92%)",
        lightgGrayBlue2: "hsl(233, 11%, 84%)",
        lightgGrayBlue3: "hsl(234, 39%, 85%)",
        darkGrayBlue1: "hsl(236, 9%, 61%)",
        darkGrayBlue2: "hsl(235, 19%, 35%)",
        darkGrayBlue3: "hsl(234, 11%, 52%)",
        darkGrayBlue4: "hsl(233, 14%, 35%)",
        darkGrayBlue5: "hsl(237, 14%, 26%)",
      },
      backgroundImage: {
        mobileBackground1: "url('./bg-mobile-dark.jpg')",
        mobileBackground2: "url('./bg-mobile-light.jpg')",
        desktopBackground1: "url('./bg-desktop-dark.jpg')",
        desktopBackground2: "url('./bg-desktop-light.jpg')",
        checkIcon: "url('./icon-check.svg')"
      },
      darkMode: "class",
    },
  },
  plugins: [],
}

