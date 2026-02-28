// Tailwind v4 preset/plugin that adds base element styles and components.
// Usage: require('./src/presets/none-preset')({ prefix: 'nc-' })
// Default: prefix = '' (no prefix) -> classes like "btn", "card"
module.exports = function nonePreset(options = {}) {
  const prefix = options?.prefix ?? '';

  return function ({ addBase, addComponents, theme }) {
    // Base element styles (classless defaults)
    addBase({
      'html, body': {
        margin: '0',
        padding: '0',
        fontFamily: 'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
        lineHeight: theme('lineHeight.normal'),
        color: 'var(--nc-text, #0f172a)',
        backgroundColor: 'var(--nc-bg, #ffffff)'
      },
      'h1': { '@apply text-3xl font-semibold mb-4': '' },
      'h2': { '@apply text-2xl font-semibold mb-3': '' },
      'h3': { '@apply text-xl font-medium mb-2': '' },
      'p': { '@apply mb-4 text-base leading-7': '' },
      'a': { '@apply text-primary-600 hover:underline': '' },
      'img': { maxWidth: '100%', height: 'auto', display: 'block' },
      'figure': { '@apply my-4': '' },
      'figcaption': { '@apply text-sm text-slate-500 mt-2': '' },
      'blockquote': { '@apply border-l-4 pl-4 italic text-slate-700 mb-4': '' },
      'pre': { '@apply bg-slate-50 p-4 rounded overflow-auto text-sm mb-4': '' },
      'code': { '@apply bg-slate-100 px-1 rounded text-sm': '' },
      'button': { '@apply bg-primary-600 text-white px-4 py-2 rounded cursor-pointer': '' },
      'input, textarea, select': { '@apply border rounded px-3 py-2': '' },
      'ul, ol': { '@apply mb-4 pl-6': '' },
      'table': { '@apply w-full table-auto border-collapse mb-4': '' },
      'th, td': { '@apply border px-3 py-2 text-left align-top': '' }
    });

    // Components (class names without prefix by default, configurable via options.prefix)
    const prefixClass = name => `.${prefix}${name}`;

    addComponents({
      [prefixClass('btn')]: {
        '@apply inline-flex items-center gap-2 px-4 py-2 rounded bg-primary-600 text-white cursor-pointer transition-colors hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-400 disabled:opacity-50 disabled:cursor-not-allowed': ''
      },
      [prefixClass('card')]: {
        '@apply bg-white rounded-lg shadow-sm p-4': ''
      },
      [prefixClass('sidebar')]: {
        '@apply bg-slate-50 p-4 w-64 h-full': ''
      },
      [prefixClass('badge')]: {
        '@apply inline-block px-2 py-0.5 rounded bg-slate-200 text-sm': ''
      },
      [prefixClass('hero')]: {
        '@apply bg-gradient-to-r from-primary-50 to-transparent p-8 rounded-lg mb-6': ''
      },
      [prefixClass('container')]: {
        '@apply max-w-5xl mx-auto px-4': ''
      },
      [prefixClass('card-grid')]: {
        '@apply grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3': ''
      }
    });
  };
};
