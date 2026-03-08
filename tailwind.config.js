/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                navy: {
                    light: '#0b2b50',
                    dark: '#031f3f',
                    DEFAULT: '#0b2b50',
                },
                green: {
                    DEFAULT: '#1a8f2d',
                    dark: '#157326',
                },
                gold: {
                    DEFAULT: '#d4a600',
                    dark: '#b89200',
                    banner: '#c79b16',
                },
                ice: '#f9fbfd',
                "ice-border": '#dbe6f1',
            },
            fontFamily: {
                sans: ['"Segoe UI"', 'Arial', 'sans-serif'],
            },
            animation: {
                'intro-zoom': 'introZoom 2.5s ease forwards',
            },
            keyframes: {
                introZoom: {
                    '0%': { transform: 'scale(3)', opacity: '0' },
                    '40%': { transform: 'scale(3)', opacity: '1' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
}
