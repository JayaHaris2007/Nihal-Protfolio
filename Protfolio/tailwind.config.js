/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: '#0f172a', // Slate 900 (Dark Blue/Charcoal)
        secondary: '#334155', // Slate 700
        accent: '#3b82f6', // Blue 500
        'accent-hover': '#2563eb', // Blue 600
        light: '#f8fafc', // Slate 50
      },
    },
  },
  plugins: [],
}
