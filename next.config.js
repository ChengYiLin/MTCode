/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
        dirs: ["src", "./next.config.js"],
    },
};

module.exports = nextConfig;
