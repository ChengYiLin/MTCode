/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        noto: ['var(--font-noto)'],
        chenYu: ['chenYu']
      },

    },
  },
  plugins: [],
}
