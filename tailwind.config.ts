import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0b0b0c',
        card: '#141416',
        accent: '#7c3aed'
      }
    },
  },
  plugins: [],
}
export default config
