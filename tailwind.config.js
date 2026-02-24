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
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fragment Mono', 'monospace'],
        serif: ['Instrument Serif', 'Georgia', 'serif'],
      },
      colors: {
        'studio-bg': 'rgb(var(--bg-primary) / <alpha-value>)',
        'studio-text': 'rgb(var(--text-primary) / <alpha-value>)',
        'studio-gray': 'rgb(var(--text-secondary) / <alpha-value>)',
        'studio-border': 'rgb(var(--border-color) / <alpha-value>)',
        'studio-primary': 'rgb(var(--accent-primary) / <alpha-value>)',
        'studio-accent': 'rgb(var(--accent-secondary) / <alpha-value>)',
        'studio-silver': 'rgb(var(--bg-silver) / <alpha-value>)',
        background: 'var(--bg-0)',
        foreground: 'var(--text-100)',
        zinc: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
          950: '#09090b',
        }
      },
      backgroundImage: {
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        fadeSlideIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-slide-in-1': 'fadeSlideIn 0.8s ease-out 0.1s forwards',
        'fade-slide-in-2': 'fadeSlideIn 0.8s ease-out 0.2s forwards',
        'fade-slide-in-3': 'fadeSlideIn 0.8s ease-out 0.3s forwards',
        'fade-slide-in-4': 'fadeSlideIn 0.8s ease-out 0.4s forwards',
      }
    }
  },
  plugins: [],
}
