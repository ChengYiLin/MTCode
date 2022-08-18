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
            fontFamily: {
                sans: [
                    "Noto Sans Display",
                    "Noto Serif TC",
                    ...defaultTheme.fontFamily.sans,
                ],
            },
            color: {
                primary: "#00040f",
                secondary: "#00f6ff",
            },
        },
    },
    plugins: [],
};
