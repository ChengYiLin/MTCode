/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        noto: ['var(--font-noto)'],
        chenYu: ['chenYu'],
      },
      colors: {
        primary: '#FD0054',
        secondary: '#59CE8F',
        dark: '#23272f',
        light: '#FBF9FA',
      },
      aspectRatio: {
        gold: '8/5',
      },
    },
  },
  plugins: [],
};
