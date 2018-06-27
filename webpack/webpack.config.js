const path = require('path');
const config = require('./webpack.config.base');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const devConfig = Object.assign({}, config);
devConfig.mode = 'development';
devConfig.devtool = 'source-map';
devConfig.devServer = {
  contentBase: path.join(__dirname, '../examples'),
  compress: true,
  port: 3000,
};
// devConfig.plugins.push(new BundleAnalyzerPlugin());

module.exports = devConfig;
