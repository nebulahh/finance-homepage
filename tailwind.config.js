/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        shade: 'rgba(176, 167, 167, 0.5)',
      },
    },
  },
  plugins: [],
}
