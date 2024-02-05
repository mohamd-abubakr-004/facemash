/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['poppins'],
      },
      colors: {
        'bg-color': '#2a3439',
        'text-color': '#fdf4ff',
        'active': '#1d4ed8'
      },
    },
  },
  plugins: [],
}