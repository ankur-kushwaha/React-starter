// Common Webpack configuration used by webpack.config.development and webpack.config.production

const path = require("path");
const webpack = require("webpack");
//const autoprefixer = require("autoprefixer");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const config = require("config");
module.exports = {
  output: {
    filename: "js/[name].[hash].js",
    path: path.resolve(__dirname, "../build"),
    publicPath: "/"
  },
  resolve: {
    modules: [
      path.join(__dirname, "../src/client/assets"),
      path.join(__dirname, "../src/"),
      "node_modules"
    ],
    alias: {
      models: path.join(__dirname, "../src/app/models")
    },
    extensions: [".js", ".jsx", ".json", ".scss"]
  },
  plugins: [
    new webpack.ProvidePlugin({
      fetch: "imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch" // fetch API
    }),
    // Shared code
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "js/vendor.[hash].js",
      minChunks: Infinity
    }),
    new webpack.DefinePlugin({
      __APIURL__: JSON.stringify(config.get("apiUrl"))
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: "./src/index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        enforce: "pre",
        options: {
          emitWarning: true
        }
      },
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, "../src/app"),
        loader: "babel-loader"
      },
      // Images
      // Inline base64 URLs for <=8k images, direct URLs for the rest
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: "url-loader",
        options: {
          limit: 8192,
          name: "images/[name].[ext]?[hash]"
        }
      },
      // Fonts
      {
        test: /\.(woff|woff2|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader",
        options: {
          limit: 8192,
          name: "fonts/[name].[ext]?[hash]"
        }
      }
    ]
  }
};
