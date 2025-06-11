// Auto-prefixing and CSS purging (prod only)
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: [
    'autoprefixer',
    ...(
      isProd
        ? [
            [
              '@fullhuman/postcss-purgecss',
              {
                content: [
                  './app/**/*.{js,jsx,ts,tsx}',
                  './components/**/*.{js,jsx,ts,tsx}',
                ],
                defaultExtractor: (content) =>
                  // Extract class names safely (dash first to avoid range issues)
                  content.match(/[-A-Za-z0-9_:/%.]+/g) || [],
              },
            ],
          ]
        : []
    ),
  ],
};
