/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#00f2ea", // Cyan
                secondary: "#7000ff", // Purple
                accent: "#ff0055", // Pink/Red
                dark: {
                    bg: "#0a0a0a",
                    surface: "#1a1a1a",
                    card: "#252525"
                },
                light: {
                    text: "#e0e0e0",
                    muted: "#a0a0a0"
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['Roboto Mono', 'monospace'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            },
            animation: {
                'spin-slow': 'spin 10s linear infinite',
            }
        },
    },
    plugins: [],
}
