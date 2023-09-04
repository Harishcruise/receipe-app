/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors:{
       'primary':{
        100:'#8BCB02',
        200:'#8ACB00'
       },
       'dark':{
        100:'#000000',
        200:'#060813',
        300:'#353535',
        400:'#666666',
        500:'#4B4B4B',
        600:'#5E5E5E'
       },
       'light':{
        100:'#FFFFFF',
        200:'#F8F8F8',
        300:'#F3FAE5',
        400:'#E0E0E0',
        500:'#F3F3F3',
        600:'#E8E8E8',
        700:'#EBEBEB',
        800:'#DDDDDD',
        900:'#F3F3F3',
       },
       'action':{
        100:'#F83446',
        200:'#068BEE',
        300:'#FC7F79',
        400:'#A9C9FF',
        500:'#0E8345',
        600:'#0D572D',
       }
    },
    extend: {},
  },
  plugins: [],
}

