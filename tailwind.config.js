/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      blue: '#7695EC',
      white: '#F9F9F9',
      gray: {
        50: '#DDDDDD',
        100: '#999999',
        200: '#777777'
      },
      red: '#FF5151',
      green: '#47B960',
      black: '#000',
      shadown: 'rgba(119, 119, 119, 0.8)'
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
    extend: {
      borderRadius: {
        'df': '8px',
      },
      width: {
        'layout': '800px',
        'df': '752px',
      }
    },
  },
  plugins: [],
}

