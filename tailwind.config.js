/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "hero-pattern": "url('/images/heroPattern.svg')",
            },
            fontFamily: {
                sans: [
                    "Noto Sans Display",
                    "Noto Serif TC",
                    ...defaultTheme.fontFamily.sans,
                ],
            },
            height: {
                "75vh": "75vh",
            },
        },
    },
    plugins: [],
};
