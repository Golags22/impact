/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(255, 0, 0, 0.8)' },
          '50%': { boxShadow: '0 0 15px rgba(255, 0, 0, 1)' },
          '100%': { boxShadow: '0 0 5px rgba(255, 0, 0, 0.8)' },
        },
        flow: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        slide: 'slide 30s linear infinite',
        glow: 'glow 1s ease-out infinite',
        flow: 'flow 2s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};