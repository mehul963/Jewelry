/** @type {import('tailwindcss').Config} */
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
      }
    },
  },
  plugins: [],
}

