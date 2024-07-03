/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.vue'],
  plugins: [],
  theme: {
    extend: {
      colors: {
        surface: 'var(--color-surface)',
        'on-surface': 'var(--color-on-surface)',
        'surface-container-low': 'var(--color-surface-container-low)'
      }
    }
  }
};
