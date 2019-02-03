var webpack = require('webpack');

const srcFolder = __dirname + '/src';
const distFolder = __dirname + '/dist';

module.exports = {
  context: srcFolder,
  entry: {
    app: './main.js',
  },
  output: {
    path: distFolder,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      }
    ]
  }
};
