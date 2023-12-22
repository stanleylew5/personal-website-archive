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
      },
      colors: {
        "dark-gray": "#121212",
        "stone-gray": "#898787",
        "navi-blue": "#5E80F8",
        "amethyst": "#8473B1",
        white: "#FFFFFF",
        black: "#000000",
      },
    },
  },
  plugins: [],
}
