/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  experimental: {
    appDir: true,
    mdxRs: true,
  },
};

const withMDX = require('@next/mdx')();
module.exports = withMDX(nextConfig);
