/* eslint-disable */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const { nextI18NextRewrites } = require("next-i18next/rewrites");

const localeSubpaths = {
  jp: "jp",
};

module.exports = withBundleAnalyzer({
  publicRuntimeConfig: {
    localeSubpaths,
  },
  experimental: {
    async rewrites() {
      return [...nextI18NextRewrites(localeSubpaths)];
    },
  },
});
