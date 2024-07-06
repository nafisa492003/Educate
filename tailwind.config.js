/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: "1320px",
      },
      colors: {
        'regal-blue': '#2A254D',
        'blue': '#4F5DE4',
        'custom_orange': '#F57005',
        'hash':'#697585'
      },
      fontFamily: {
        'Urbanist': ['Urbanist', 'sans-serif'],
        'WaterBrush': ['Water Brush', 'cursive'],
        'allison': ['Allison', 'cursive'],
      },
    },
  },
  plugins: [],
}

