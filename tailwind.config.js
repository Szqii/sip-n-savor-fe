/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary": "#BFA75D",
            },
            fontFamily: {
                "primary": ["Nunito", 'sans-serif'],
            },
            fontSize: {
                "xxs": ".5rem",
                "xxxs": ".4rem",
            }
        },
    },
    plugins: [],
}

