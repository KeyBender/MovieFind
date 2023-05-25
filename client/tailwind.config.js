/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      backgroundImage:{
        'wave-image': "url('../layered-waves-haikei.svg')"
      }
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
}
