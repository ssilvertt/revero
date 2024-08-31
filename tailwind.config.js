/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                main: '#111930',
                nav: '#131d39',
                active: '#4200ff',
            },
            fontFamily: {
                proxima: ['Proxima Nova', 'sans-serif'],
                gilroy: ['Gilroy', 'sans-serif'],
            },
            animation: {
                glow: 'glow 2s ease-in-out infinite',
            },
            backgroundImage: {
                staticon:
                    'linear-gradient(175.82deg, rgb(66, 0, 255) -19.093%, rgb(56, 145, 255) 95.256%), rgb(217, 217, 217)',
            },
        },
    },
    plugins: [],
};
