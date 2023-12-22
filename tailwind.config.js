/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      
      colors:{
        "dark-gray": "121212",
        "stone-gray": "#898787",
        "navi-blue": "#5E80F8",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
}
