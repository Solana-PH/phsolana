/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Barrio', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Roboto', 'ui-sans-serif', 'system-ui'],
      },
      animation: {
        'spin-slow': 'spin 60s linear infinite', // Customize the speed as needed
      },
    },
  },
  plugins: [],
}
