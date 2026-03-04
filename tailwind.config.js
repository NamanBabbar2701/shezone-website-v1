/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#EDE3F1',
        primary: '#8E24AA',
        accent: '#C2185B',
        text: '#2C2C2C',
        white: '#FFFFFF',
      },
      boxShadow: {
        soft: '0 10px 25px rgba(0,0,0,0.08)',
      },
      borderRadius: {
        xl: '1rem',
      },
    },
  },
  plugins: [],
}

