/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: '#1d4ed8',
        secondary: '#64748b',
        dark: '#0f172a'
      },
      screens: {
        '2xl' : '1320px',
      }
    }
  },
  plugins: []
};

// #92400e
// #1d4ed8