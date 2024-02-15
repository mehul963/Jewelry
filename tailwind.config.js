/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    '*.html',
    '**/*.{html,js}',
    '**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'nato': ['Noto Serif', 'sans-serif'],
        'poppins':["Poppins", 'sans-serif'],
      },
      fontWeight: {
        '100':100,
        '200':200,
        '300':300,
        '400':400,
        '500':500,
        '600':600,
        '700':700,
        '800':800,
        '900':900,
      },
      grayscale: {
        50: '50%',
        60: '60%',
        70: '70%',
        75: '75%',
      },
      saturate: {
        20: '20%',
        30: '30%',
        40: '40%',
      }
    },
  },
  plugins: [
  ],
}

