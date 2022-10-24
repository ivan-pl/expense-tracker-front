const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
n;

module.exports = merge(common, {
  mode: "production",
  optimization: {
    minimizer: [`...`, new CssMinimizerPlugin()],
  },
});
