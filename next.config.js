/** @type {import('next').NextConfig} */
const path = require('path');

// Bundle Analyzer
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

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
    ignoreDuringBuilds: true,
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

// Export config wrapped with analyzer
module.exports = withBundleAnalyzer(nextConfig);
