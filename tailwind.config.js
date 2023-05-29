/** @type {import('tailwindcss').Config} */
export default {
    content: ["./*.hbs", "./**/*.hbs"],
    theme: {
        extend: {
            colors: {
                themeBlue: '#BBDADA',
                themeGreen: "#DCEBD3",
                themeYellow: "#F5F5D8",
                themePink: "#E8D0D1",
            },
            animation: {
                runAway: "runAway 4s infinite",
                comeIn: "comeIn 4s infinite",
            },
            keyframes: {
                runAway: {
                    "0%": { transform: "translateY(0)", opacity: "1" },
                    "100%": { transform: "translateY(-100%)", opacity: "0" },
                },
                comeIn: {
                    "0%": { transform: "translateY(100%)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
