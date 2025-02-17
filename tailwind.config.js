/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)', 'Arial', 'sans-serif'],
        serif: ['var(--font-playfair-display)', 'serif'],
      },
      
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      
      
    },
  },
  plugins: [],
};