/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '55px': '55px',
        '1px' : '1px',
        '32px' : '32px'
      },
      fontFamily: {
        'jetbrains': ['JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}

