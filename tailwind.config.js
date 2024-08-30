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
            },
            animation: {
                glow: 'glow 2s ease-in-out infinite',
            },
        },
    },
    plugins: [],
};
