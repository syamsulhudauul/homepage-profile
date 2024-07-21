// next.config.mjs
const isProd = process.env.NODE_ENV === 'production';

export default {
  output: 'export',
  assetPrefix: isProd ? '/my-next-app/' : '',
  basePath: isProd ? '/my-next-app' : '',
};
