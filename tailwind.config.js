/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#eaded2',
        secondary: '#a45848',
        accent: '#132235',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { backgroundColor: '#bfbfbf' },
          '50%': { backgroundColor: '#7c7c7c' },
        }
      },
      animation: {
        pulse: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
