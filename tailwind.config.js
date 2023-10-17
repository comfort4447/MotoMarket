/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Montserrat'], // Use 'Montserrat' as the custom font
      },
      colors: {
        // Add your custom colors here
        primary: '#FF5733', // Example: Custom primary color
        secondary: {
          100: '#454545', // Example: Custom secondary color with shades
          200: '#C4C4C4',
          300: '#A6A6A6',
          400: '#2E2E2E',
          500: '#FDC21E',
          600: '#FEF5E7',
          700: '#454545',
          800: '#2E2E2E',
          900: '#FEE9C5',
        },
    },
  },
  plugins: [],
}
}