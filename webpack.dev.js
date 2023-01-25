const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    compress: true,
    port: 9000,
    watchFiles: ["*.html"],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              additionalData: '@import "variables";',
              sassOptions: {
                includePaths: [path.resolve(__dirname, "./src/styles")],
              },
            },
          },
        ],
      },
    ],
  },
});
