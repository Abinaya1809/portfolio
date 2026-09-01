/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'near-black': '#050505',
        'black-main': '#0A0A0A',
        'dark-grey': '#111111',
        'surface-grey': '#181818',
        'border-grey': '#2A2A2A',
        'medium-grey': '#555555',
        'muted-grey': '#777777',
        'light-grey': '#A0A0A0',
        'soft-white': '#D5D5D5',
        'white-main': '#F5F5F5',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
