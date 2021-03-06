"use strict"
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    // watchContentBase: true,
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};
