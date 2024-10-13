/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                purple: {
                    900: '#4A148C',
                    700: '#7B1FA2',
                    600: '#8E24AA',
                },
                green: {
                    500: '#4CAF50',
                    600: '#43A047',
                },
            },
        },
    },
    plugins: [],
}