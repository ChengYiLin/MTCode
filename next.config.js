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
  images: {
    domains: ['martincode.info', 'cdn.sanity.io'],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
