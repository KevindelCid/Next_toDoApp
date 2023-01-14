/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blackDark': '#000000',
        'blueDark':'#102344',
        'blueGray': '#37599c',
        'skyBlue': '#6696ff',
        'skyBlueWhite': '#9cdaff'
      },
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      fontSize: {
        smallMobile: '8px',
        normalMobile: '12px',
        mediumMobile: '15px',
        bigMobile: '20px',
      }

    },
  },
  plugins: [],
}