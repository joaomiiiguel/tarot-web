import { nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        customFont: ['"BellaQueta"', 'sans-serif'],
      },
    },
  },
  darkMode: "class",
  darkMode: "class",
  plugins: [nextui({
    themes: {
      dark: {
        colors: {
          background: "#100721", // or DEFAULT
          foreground: "#FFD0F7", // or 50 to 900 DEFAULT
          primary: {
            foreground: "#321A3E",
            DEFAULT: "#FFD0F7",
          },
          secondary: {
            foreground: "#FFD0F7",
            DEFAULT: "#321A3E",
          },
        },
      }
    }
  })],
}
