/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        radial: 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
      colors: {
        'journal-yellow': '#FEFAD6',
        'journal-dark-yellow': '#cec7a1',
        'journal-brown': '#513933',
        'journal-lines': '#b9af79'
      }
    },
  },
  plugins: [],
}

