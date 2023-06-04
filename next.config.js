/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['martincode.info'],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
