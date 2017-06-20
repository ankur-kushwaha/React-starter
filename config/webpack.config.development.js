const merge = require("webpack-merge");
const webpack = require("webpack");
const config = require("./webpack.config.base");
const path = require("path");

const GLOBALS = {
  "process.env": {
    NODE_ENV: JSON.stringify("development")
  },
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || "true"))
};

module.exports = merge(config, {
  cache: true,
  devtool: "cheap-module-eval-source-map",
  entry: {
    application: [
      "webpack-hot-middleware/client",
      "react-hot-loader/patch",
      "development"
    ],
    vendor: ["react", "react-dom", "react-redux", "react-router", "redux"]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin(GLOBALS)
  ],
  module: {
    rules: [
      // Sass
      {
        test: /\.scss$/,
        include: [path.resolve(__dirname, "../src")],
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [
                // require("postcss-cssnext")(),
                require("autoprefixer")({
                  browsers: ["last 2 versions"]
                }),
                require("cssnano")()
              ]
            }
          },
          {
            loader: "sass-loader",
            options: {
              outputStyle: "expanded",
              sourceMap: true,
              includePaths: [__dirname, "../src"]
            }
          }
        ]
      },
      // Sass + CSS Modules
      // {
      //   test: /\.scss$/,
      //   include: /src\/client\/assets\/javascripts/,
      //   loaders: [
      //     'style',
      //     {
      //       loader: 'css',
      //       query: {
      //         modules: true,
      //         importLoaders: 1,
      //         localIdentName: '[path][name]__[local]--[hash:base64:5]'
      //       }
      //     },
      //     'postcss',
      //     { loader: 'sass', query: { outputStyle: 'expanded' } }
      //   ]
      // },
      // CSS
      {
        test: /\.css$/,

        use: ["style-loader", "css-loader", "postcss-loader"]
      }
    ]
  }
});
