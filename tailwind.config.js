/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens :{
      'phone' : '576px',

      'tablet' : '768px',

      'desktop' : '1200px'
    },
    extend: {},
  },
  plugins: [],
}

