const webpack = require('webpack');
const config = require('./webpack.config');

const debugConfig = Object.assign({}, config);

debugConfig.plugins.push(new webpack.DefinePlugin({
  DEBUG: JSON.stringify(true),
  LOG_LEVEL: JSON.stringify(40),
}));

module.exports = debugConfig;
