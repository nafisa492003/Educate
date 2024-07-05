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
        'custom_orange': '#F57005',
      },
      fontFamily: {
        'Urbanist': ['Urbanist', 'sans-serif'],
        'WaterBrush': ['Water Brush', 'cursive'],
      },
    },
  },
  plugins: [],
}

