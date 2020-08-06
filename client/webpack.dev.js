const path = require('path');
const childProcess = require('child_process');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/main.js',
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
        use: ['style-loader', 'css-loader', 'sass-loader'],
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
    new HtmlWebpackPlugin({
      template: './public/index.html',
      templateParameters: {
        env: '(개발용)',
      },
      hash: true,
    }),
    new webpack.DefinePlugin({
      __API__: JSON.stringify('http://localhost:3000'),
    }),
    new webpack.BannerPlugin({
      banner: () => {
        const commit = childProcess.execSync('git rev-parse --short HEAD');
        const user = childProcess.execSync('git config user.name');
        const date = new Date().toLocaleString();

        return `commitVersion: ${commit}` + `Build Date: ${date}\n` + `Author: ${user}`;
      },
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    overlay: true,
    hot: true,
    historyApiFallback: true,
  },
};
