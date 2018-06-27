const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
  entry: {
    'dist/app': './src/app/app.js',
    'examples/app': './src/examples/js/app.js',
  },
  output: {
    path: path.join(__dirname, '../'),
    filename: '[name].js',
    library: 'loggout',
    libraryTarget: 'umd',
  },
  plugins: [
    new CleanWebpackPlugin(['dist', 'examples'], { root: path.join(__dirname, '../') }),
    new HtmlWebpackPlugin({
      template: './src/examples/index.pug',
      inject: true,
      filename: 'examples/index.html',
    }),
    new WriteFilePlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader',
          'eslint-loader',
        ],
        include: path.join(__dirname, '../src'),
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        include: path.join(__dirname, '../src'),
      },
    ],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src/app/'),
    },
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'app',
          test: /\.(sa|sc|c)ss$/,
          chunks: 'all',
          enforce: false,
        },
      },
    },
  },
};
