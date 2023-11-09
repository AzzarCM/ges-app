/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-black': '#030304',
        'custom-black-200': '#161515',
        'custom-black-gray': '#272727',
        'custom-white': '#FCFBFB',
        'custom-white-dark': '#EBE3E3',
        'custom-brown': '#482D23',
        'custom-red': '#FF6561',
        'custom-light-gray': '#AEA1A2',
        'custom-dark-gray': '#5F5E5C',
        'custom-dark-green': '#718C83',
        'global-main-color': '#fcc26c',
        'global-main-color-dark': '#E1B169'
      }
    },
  },
  plugins: [],
}

