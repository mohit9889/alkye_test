/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        testSoehne: ['TestSoehne', 'sans-serif'],
      },
      fontWeight: {
        200: 200,
        300: 300,
        400: 400,
        500: 500,
        600: 600,
        700: 700,
        800: 800,
        900: 900,
      },
      colors: {
        'light-gray': '#F4F4F4',
        white: '#fff',
        black: '#000000',
        'gray-500': '#939393',
        'gray-600': '#636363',
        'gray-700': '#4E4E4E',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '2rem',
          sm: '2rem',
          md: '4rem',
          lg: '6rem',
          xl: '8rem',
        },
        screens: {
          '2xl': '1728px',
        },
      },
      spacing: {
        'container-margin': '95px',
      },
    },
  },
  plugins: [],
};
