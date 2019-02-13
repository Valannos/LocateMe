"use strict";
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebPack = require("clean-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  entry: {
    app: "./src/index.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Locate Me",
      filename : 'index.html'
    }),
    new CleanWebPack(["dist"]),
    new VueLoaderPlugin()
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")    
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
      {
        test : /\.css$/,
        use : [
          'style-loader', 'css-loader'
        ]
      }
    ]
  } 
};
