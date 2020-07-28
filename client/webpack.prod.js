const path = require('path');
const childProcess = require('child_process');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: {
    main: './src/app.js',
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'images/[name].[ext]?[hash]',
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      templateParameters: {
        env: '',
      },
      hash: true,
    }),
    new webpack.BannerPlugin({
      banner: () => {
        const commit = childProcess.execSync('git rev-parse --short HEAD');
        const user = childProcess.execSync('git config user.name');
        const date = new Date().toLocaleString();

        return (
          `commitVersion: ${commit}` +
          `Build Date: ${date}\n` +
          `Author: ${user}`
        );
      },
    }),
  ],
};
