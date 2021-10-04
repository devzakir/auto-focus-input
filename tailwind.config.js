const path = require('path');
const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin')


module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
    './helpers/**/*.{js,ts,jsx,tsx}',
    // Add more here
],
  darkMode: 'class', // was fasle  -  or 'media' or 'class'
    theme: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        blue: {
          light: '#e6f2ff',
          DEFAULT: '#007bff',
          dark: '#003166',
        },
        pink: {
          light: '#ff7ce5',
          DEFAULT: '#ff19c6',
          dark: '#ff16d1',
        },
        white: {
          light: '#ff7ce5',
          DEFAULT: '#ffffff',
          dark: '#ff16d1',
        },
        gray: colors.blueGray,
      },
      fontFamily: {
        sans: ['"HelveticaNeue-Light"', '"HelveticaNeue-Light"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'Lucida Grande', 'sans-serif'],
        poppins: ['Poppins']
      },
    },
    extend: {
      colors: {
        // Change with you want it
        'litepie-primary': colors.lightBlue, // color system for light mode
        'litepie-secondary': colors.coolGray // color system for dark mode
      },
    },
    variants: {
      extend: {
        cursor: ['disabled'],
        textOpacity: ['disabled'],
        textColor: ['disabled']
      }
    },
    plugins: [
      require('@tailwindcss/typography'),
      require('daisyui'),
      plugin(function({ addBase, theme }) {
        addBase({
          'h1': { fontSize: theme('fontSize.2xl'), fontWeight: theme('fontWeight.bold') },
          'h3': { fontSize: theme('fontSize.lg') },
        })
      })
    ],
    daisyui: {
      styled: true,
      base: true,
      utils: true,
      themes: [
        {
          'tripbid': { // custom theme
            'primary' : '#007bff',
            'primary-focus' : '#1F47CD',
            'primary-content' : '#ffffff',
            // other colors
            'base-200': '#f9fafb',
            'search-bg': '#007bff',
            'info': '#007bff',
            'secondary' : '#0cb0e8',
            'secondary-focus' : '#0C3CE8',
            'secondary-content' : '#ffffff',

            '--rounded-box': '1rem',        /* border-radius for cards and other big elements */
            '--rounded-btn': '0.5rem',      /* border-radius for buttons and similar elements */
            '--rounded-badge': '1.9rem',    /* border-radius for badge and other small elements */

            '--animation-btn': '0.25s',     /* bounce animation time for button */
            '--animation-input': '.2s',     /* bounce animation time for checkbox, toggle, etc */

            '--padding-card': '2rem',       /* default card-body padding */
            
            '--btn-text-case': 'capitalize', /*default text case for buttons */
            '--navbar-padding': '.5rem',    /* default padding for navbar */
            '--border-btn': '1px',          /* default border size for button */
            '--focus-ring': '2px',          /* focus ring size for button and inputs */
            '--focus-ring-offset': '2px',   /* focus ring offset size for button and inputs */
          },
        },
      ],
    },
}