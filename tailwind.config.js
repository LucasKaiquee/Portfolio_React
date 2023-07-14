/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background-main': "url('/src/assets/imgs/background-main.png')",
      },
    },
  },
  plugins: [],
}

