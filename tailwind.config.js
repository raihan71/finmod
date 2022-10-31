/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    fontFamily: {
      'epi': ['Epilogue'],
      'dm': ['"DM Sans"'],
      'body': ['Poppins']
    },
    extend: {},
  },
  plugins: [require('tw-elements/dist/plugin')],
};
