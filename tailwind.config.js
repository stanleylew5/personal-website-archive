/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      dropShadow:{
        'projectleft':'35px 25px 0px rgba(62, 58, 72, 1)',
        'projectright':'-35px 25px 0px rgba(62, 58, 72, 1)',
      },
      keyframes:{
        animatedgradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
      animation:{
        gradient: 'animatedgradient 6s linear infinite alternate',
        spin: 'spin 8s linear infinite',
      },
      colors: {
        stanley:{
          "gray-000": "#868686",
          "gray-100": "#A6A6A6",
          "gray-200": "#C1C1C1",
          "gray-300": "#272727",
          "gray-400": "#2A2A2A",
          "purple-100": "#A994C2",
          "purple-200": "#7F5D8B",
          "purple-300": "#74638A",
          "purple-400": "#705F86",
          "purple-500": "#665D6A",
          "white-100": "#E4E4E4",
        },
      },
    },
  },
  plugins: [],
}
