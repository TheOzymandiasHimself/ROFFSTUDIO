// PostCSS configuration with autoprefixer and conditional PurgeCSS (production only)
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
                  content.match(/[-A-Za-z0-9_:/%.]+/g) || [],
              },
            ],
          ]
        : []
    ),
  ],
};
