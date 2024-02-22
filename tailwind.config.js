/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        green: "#5CDB95",
        violate: "#05386B",
        sidecol: "#379683",
        darkblue:"#05386B",
        oraneplus:"#F9B872",
        orange:"#FAE7A5",
        powerblue:"#B6E1E7"
      },
      spacing: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
      },
    },
  },
  plugins: [],
}

