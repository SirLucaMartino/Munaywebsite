/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-green': '#165927',
        'soft-green': '#7A8C72',
        'cream': '#F2F1DF',
        'orange': '#F29B30',
        'orange-hover': '#F28A2E',
      },
      fontFamily: {
        'marcellus': ['Marcellus', 'serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
  plugins: [],
}