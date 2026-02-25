/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#2271D1',
          dark: '#090F16',
          grey: '#191919',
          white: '#F5F5F5',
        },
        category: {
          frontend: '#68D1FF',
          backend: '#00C86F',
          innovacion: '#FFBA05',
        }
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        source: ['"Source Sans 3"', 'sans-serif'],
      },
      boxShadow: {
        brand: '0 0 10px rgba(34, 113, 209, 0.5)',
      }
    },
  },
  plugins: [],
}
