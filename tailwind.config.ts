import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/[locale]/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
      },
      colors: {
        primary: {
          950: '#1A1A1D',
          900: '#3B1C32',
          800: '#6A1E55',
          700: '#A64D79',
        }
      },
      animation: {
        'gradient-x': 'gradientX 3s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        gradientX: {
          '0%, 100%': { 'background-size': '200% 200%' },
          '50%': { 'background-size': '100% 100%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { textShadow: '0 0 20px rgb(166, 77, 121)' },
          '100%': { textShadow: '0 0 30px rgb(106, 30, 85)' },
        },
      },
    },
  },
  plugins: [],
}
export default config

