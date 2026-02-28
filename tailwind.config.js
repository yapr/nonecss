// Example tailwind.config.js for a project that uses the preset locally.
const nonePreset = require('./src/presets/none-preset');

module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}', './public/**/*.html'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: 'var(--nc-primary, #2563eb)',
          700: 'var(--nc-primary-dark, #1d4ed8)',
          800: '#3730a3',
          900: '#312e81'
        }
      },
      borderRadius: {
        lg: '0.75rem'
      }
    }
  },
  plugins: [
    nonePreset({ prefix: '' }) // default: no prefix (btn, card, ...)
  ]
};
