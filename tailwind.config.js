/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index.tsx",
    "./App.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fragment Mono', 'monospace'],
      },
      colors: {
        'studio-bg': 'rgb(var(--bg-primary) / <alpha-value>)',
        'studio-text': 'rgb(var(--text-primary) / <alpha-value>)',
        'studio-gray': 'rgb(var(--text-secondary) / <alpha-value>)',
        'studio-border': 'rgb(var(--border-color) / <alpha-value>)',
        'studio-primary': 'rgb(var(--accent-primary) / <alpha-value>)',
        'studio-accent': 'rgb(var(--accent-secondary) / <alpha-value>)',
        'studio-silver': 'rgb(var(--bg-silver) / <alpha-value>)',
      }
    }
  },
  plugins: [],
}
