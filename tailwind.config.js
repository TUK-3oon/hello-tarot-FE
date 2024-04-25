/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "*.{html,js,ts,tsx}"
  ],
  theme: {
    //이걸 설정하면 테일윈드에서 제공하는 color를 사용 못함
    colors: {
      'main': '#192544',
      'white': '#FFFFFF',
      'black': '#000000',
      'logo': '#D4D3B8'
    },
    extend: {
      backgroundImage: {
        'tarot-back': "url('./assets/images/back.svg')"
      },
      cursor: {
        default: 'url(./assets/images/cursor.svg), default',
      }
    },
  },
  plugins: [],
}