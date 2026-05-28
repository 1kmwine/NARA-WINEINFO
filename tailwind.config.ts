import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7b2335',
          50: '#fdf2f4',
          100: '#fce7ea',
          200: '#f9d3d9',
          300: '#f4adb8',
          400: '#ec7d91',
          500: '#e04f6b',
          600: '#cc3050',
          700: '#ab2240',
          800: '#7b2335',
          900: '#6b1f30',
          950: '#3c0d18',
        },
        accent: '#c0392b',
        wine: {
          red: '#7b2335',
          dark: '#5a1926',
          light: '#a83245',
        },
      },
      fontFamily: {
        sans: [
          'Apple SD Gothic Neo',
          'Malgun Gothic',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}
export default config
