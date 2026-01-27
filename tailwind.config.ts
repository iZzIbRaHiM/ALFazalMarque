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
          black: '#0a0a0a',
          gray: '#1a1a1a',
        },
        secondary: {
          white: '#fafaf9',
          beige: '#f5f5f0',
          warm: '#e8e6e0',
        },
        accent: {
          earth: '#b8a992',
          sand: '#d4c5b0',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
      },
      fontSize: {
        'display-xl': ['clamp(4rem, 10vw, 8rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1', letterSpacing: '-0.01em' }],
        'display-sm': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
      },
      spacing: {
        'section': 'clamp(4rem, 12vh, 10rem)',
        'section-lg': 'clamp(6rem, 16vh, 14rem)',
      },
    },
  },
  plugins: [],
}
export default config
