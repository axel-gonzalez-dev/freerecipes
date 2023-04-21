/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/utilities/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      'seasalt': '#F8F8F8',
      'jet': '#333333',
      'dimgray': '#666666',
      'uranianblue': '#A2D5F2',
      'tiffanyblue': '#B2DFDB',
      'dutchwhite': '#F6E6C6'
    },
    extend: {
      gridTemplateColumns: {
        'auto': 'repeat(auto-fill, minmax(200px, 1fr))',
      }
    },
  },
  plugins: [],
}
