/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},

    screens: {
      'ssm': '407px',
      'sm': '640px',
      'md': '968px',
      'lg': '1024px',
      'xl': '1300px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}

