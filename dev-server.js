// Creates a hot reloading development environment

const path = require("path");
const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const config = require("./config/webpack.config.development");

const app = express();
const compiler = webpack(config);

const host = process.env.HOST || "localhost";
const port = process.env.PORT || 3000;

function log() {
  arguments[0] = "\nWebpack: " + arguments[0];
  console.log.apply(console, arguments);
}

app.use(
  webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    stats: {
      colors: true
    },
    historyApiFallback: true
  })
);

app.use(webpackHotMiddleware(compiler));

app.get("*", function(req, res) {
  var filename = path.join(compiler.outputPath, "index.html");
  compiler.outputFileSystem.readFile(filename, function(err, result) {
    if (err) {
      return next(err);
    }
    res.set("content-type", "text/html");
    res.send(result);
    res.end();
  });
});

app.listen(port, host, (err) => {
  if (err) {
    log(err);
    return;
  }

  log("🚧  App is listening at http://%s:%s", host, port);
});
