const nextTranslate = require("next-translate");

const nextConfig = {
  reactStrictMode: false,
  i18n: {
    localeDetection: true,
  },
};

module.exports = nextTranslate(nextConfig);
