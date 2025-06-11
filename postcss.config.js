// PostCSS configuration with autoprefixer and conditional PurgeCSS (production only)
const isProd = process.env.NODE_ENV === 'production';

const autoprefixer = require('autoprefixer');

// Helper to safely require ESM/CJS modules
const safeRequire = (pkg) => {
  const mod = require(pkg);
  return mod && typeof mod === 'object' && 'default' in mod ? mod.default : mod;
};

// PurgeCSS plugin instance (only when building for production)
const purgecss = safeRequire('@fullhuman/postcss-purgecss')({
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  defaultExtractor: (content) =>
    // Extract class names safely (hyphen first to avoid range issues)
    content.match(/[-A-Za-z0-9_:/%.]+/g) || [],
});

module.exports = {
  plugins: [
    autoprefixer,
    ...(isProd ? [purgecss] : []),
  ],
};
