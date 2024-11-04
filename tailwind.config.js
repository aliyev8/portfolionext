/** @type {import('tailwindcss').Config} */
module.exports = {


  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '1030px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    fontFamily: {
      avenirBook: ["avenirBook", "sans-serif"],
      avenirHeavy: ["avenirHeavy", "sans-serif"],
      avenirMedium:["avenirMedium", "sans-serif"],
      tusker:["tusker","sans-serif"],
      tusker_semi:["tusker_semi","sans-serif"]


    },

    extend: {
      boxShadow: {
        '3xl': 'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
        '2xl':"rgba(0, 0, 0, 0.15) 0px 20px 20px 0px",
        "1xl":"0 1px 0 #CCCCCC, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15)"
      },
      colors: {
        blueTheme: {
          text:'#6deaff',
          background:'#003950',
          other:'#ffcefb'
        },
        neonTheme: {
          text:'#235a68',
          background:'#011926',
          other:'#00e980'
        },
        gray:{
          900:"#f8f9fb"

        },
        green:{
          900:"#cef2e8"
        }
      },
    },
  },
  plugins: [],
};
