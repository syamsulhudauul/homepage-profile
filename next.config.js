// next.config.js
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? '/my-next-app/' : '',
  basePath: isProd ? '/my-next-app' : '',
};
