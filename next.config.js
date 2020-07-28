const { nextI18NextRewrites } = require('next-i18next/rewrites');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

const localeSubpaths = {
  jp: 'jp'
};

module.exports = withBundleAnalyzer({
  publicRuntimeConfig: {
    localeSubpaths
  },

  async rewrites() {
    return [...nextI18NextRewrites(localeSubpaths)];
  }
});
