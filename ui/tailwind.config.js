/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        fontFamily: {
            sans: ['Fira Sans Condensed', 'sans-serif'],
        },
        extend: {
            height: {
                'screen-1/2': '50vh',
                'screen-1/3': '33vh',
                'screen-2/3': '66vh',
                'screen-1/4': '25vh',
                'screen-3/4': '75vh',
            },
            width: {
                'screen-2/3': '66vw',
            },
            minHeight: {
                'screen-1/2': '50vh',
                'screen-2/3': '66vh',
                'screen-3/4': '75vh',
            },
            maxHeight: {
                'screen-1/2': '50vh',
                'screen-1/3': '33vh',
                'screen-2/3': '66vh',
            },
        },
    },
    plugins: [
        require('tailwind-clip-path'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/typography'),
    ],
};
