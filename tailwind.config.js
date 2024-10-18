/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/*.{js,jsx,ts,tsx}',
   "./components/* */*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        // sm : { max: "480px" },
        sm2: {max: "480 px"},
        sm1: {max: "640px"},
        sm4: {max: "960px"},
        esm: {max: "280px"},
        sm3: {min:"520px"},
        vsm: { min: "380px" },
        lg1: {min: "1100px"}, 
        mob: { max: "1100px" },
        mob1: { max: "1300px" },
        md1: { min: "821px" }
        // => @media (max-width: 639px) { ... }
      },
      inset: {
        '1/20': '5%',
        '1/10': '10%',
        '3/20': '15%',
        '2/10': '20%',
        '3/10': '30%',
        '7/20': '35%',
        '4/10': '40%',
        '9/20': '45%',
        '11/20': '55%',
        '6/10': '60%',
        '13/20': '65%',
        '7/10': '70%',
        '8/10': '80%',
        '17/20': '85%',
        '9/10': '90%',
        '19/20': '95%'
      },
      colors: {
        'custom_black':{
          '500': '#373A3A'
        },
        'custom_green': {
          '400': '#4f9d69',
          '600': '#4F9D6933'
        },
        'custom_grey':{
          '100': '#F5F5F5',
          '200': '#D3D3D3',
          '300': '#707272'
        },
        'custom_blue': {
          '50': '#edf3ff',
          '100': '#5863f833',
          '200': '#c4d3ff',
          '300': '#a1b5ff',
          '400': '#7b8dfe',
          '500': '#5863f8',
          '600': '#403eed',
          '700': '#3531d1',
          '800': '#2c2aa9',
          '900': '#2a2b85',
          '1000': '#DEE0FE',
      },
      'custom_red': {
        '500': "#D62424",
      }
      
      },
      maxWidth: {
        '2xs': '260px',
    },
  },
  plugins: [],
  }
}
