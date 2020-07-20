const { nextI18NextRewrites } = require('next-i18next/rewrites');

const localeSubpaths = {
  jp: 'jp'
};

module.exports = {
  publicRuntimeConfig: {
    localeSubpaths
  },
  experimental: {
    async rewrites() {
      return [...nextI18NextRewrites(localeSubpaths)];
    }
  }
};
