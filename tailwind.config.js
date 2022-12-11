/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#14D9E5',
                secondary: '#9DFE00',
                'theme-dark': '#191D29',
            },
            fontFamily: {
                'tt-travels': ['TTTravels', 'sans-serif'],
                poppins: ['Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [require('@tailwindcss/line-clamp')],
};
