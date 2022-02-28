module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'google',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'next/core-web-vitals',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 13,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        "require-jsdoc": "off",
    }
};
