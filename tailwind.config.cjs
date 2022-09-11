/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#fa4d08",
                secondary: {
                    light: "#006595",
                    dark: "#0C2340"
                },
                gray: {
                    dark: "#6a6f81",
                    light: "#969696",
                }
            },
        },
    },
    plugins: [],
}