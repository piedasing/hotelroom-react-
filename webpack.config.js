var webpack = require('webpack')
var path = require('path')

var DIST_DIR = path.resolve(__dirname, 'dist')
var SRC_DIR = path.resolve(__dirname, "src")

var config = {
  entry: SRC_DIR + "/app/index.js",
  output: {
    path: DIST_DIR + "/app",
    filename: "bundle.js",
    publicPath: "/app/"
  },
  /*plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ] : [],*/
  module: {
    rules: [
      {
        test: /\.js?/, exclude: /node_modules/,
        include: SRC_DIR,
        loader: "babel-loader",
        query: {
          presets: ["react","es2015","stage-2"]
        }
      },
      {
        test: /\.css$/, // Only .css files
        loader: ['style-loader','css-loader'] // Run both loaders
      }
    ]
  }
}

module.exports = config