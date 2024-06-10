/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './app/**/*.jsx',
    './components/**/*.jsx',
    './lib/hljs-toolbar.mjs',
    './lib/active-link.js'
  ],
  theme: {
    extend: {
      colors: {
        "ajwa-blue": "#0066FF",
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            'code::before': {
              content: '',
            },
            'code::after': {
              content: '',
            },
            'p code': {
              paddingLeft: '0.25rem',
              paddingRight: '0.25rem',
              paddingTop: '0.125rem',
              paddingBottom: '0.125rem',
              backgroundColor: theme('colors.gray[200]'),
              borderRadius: '0.25rem',
              fontWeight: '400',
            },
            'blockquote p:first-of-type::before': {
              content: '',
            },
            'blockquote p:first-of-type::after': {
              content: '',
            },
          },
        },
        ajwa: {
          css: {
            '--tw-prose-body': theme('colors.gray[800]'),
            '--tw-prose-headings': theme('colors.gray[900]'),
            '--tw-prose-lead': theme('colors.gray[700]'),
            '--tw-prose-links': theme('colors.ajwa-blue'),
            '--tw-prose-bold': theme('colors.gray[800]'),
            '--tw-prose-counters': theme('colors.gray[600]'),
            '--tw-prose-bullets': theme('colors.red[600]'),
            '--tw-prose-hr': theme('colors.gray[300]'),
            '--tw-prose-quotes': theme('colors.gray[900]'),
            '--tw-prose-quote-borders': theme('colors.gray[300]'),
            '--tw-prose-captions': theme('colors.gray[700]'),
            '--tw-prose-th-borders': theme('colors.gray[300]'),
            '--tw-prose-td-borders': theme('colors.gray[200]'),
          },
        },
      }),
      fontFamily: {
        roboto: ['var(--font-roboto)'],
        'source-code-pro': ['var(--font-source-code-pro)'],
      },
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
