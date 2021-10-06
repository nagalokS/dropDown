const path = require("path");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.config.js");
const ReactRefresh = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = merge(baseConfig, {
  target: "web",
  mode: "development",
  devtool: "source-map",
  devServer: {
    hot: true,
  },
  plugins: [new ReactRefresh()],
});
