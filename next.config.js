/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {

  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'css')],
  },
  trailingSlash: true,
  devIndicators: {
    buildActivity: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home-personal',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
