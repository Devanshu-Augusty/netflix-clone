/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'red': 'rgb(229, 9, 20)',
        'lightBlack': 'rgb(45,45,45)',
      },
      borderColor: {
        'lightBlack': 'rgb(45,45,45)',
      },
      textColor: {
        'footer': 'rgba(255,255,255,0.7)',
      }
      
    },
  },
  plugins: [],
}

