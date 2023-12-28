/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 12px 4px rgba(0, 0, 0)',
        '4xl': '0px 0px 4px rgba(0, 0, 0)',
        '5xl': '0px 0px 0px rgba(255, 255, 255)',
      },
      colors: {
        "dark-gray": "#121212",
        "stone-gray": "#898787",
        "navi-blue": "#5E80F8",
        "amethyst": "#8473B1",
        offwhite: "#C2C2C2",
        black: "#000000",
        lilacblue: "#5E80F8",
      },
    },
  },
  plugins: [],
}
