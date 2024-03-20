/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        insBanner: "url(../dist/img/banner-img.png)",
        projOne: "url(../dist/img/projects1.png)",
        projTwo: "url(../dist/img/projects2.png)",
        projThree: "url(../dist/img/projects3.png)",
      },
      colors: {
        dark: "#2b2b2b",
        light: "#ffffff",
        orangee: "#e84738",
        lberde: "#d4e9e2",
      }
    },
  },
  plugins: [],
}

