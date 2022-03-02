const path = require("path");
const ExtractCss = require("mini-css-extract-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  output: { path: path.resolve(__dirname, "dist"), filename: "js/bundle.js" },
  optimization: { minimize: true },
  devServer: {
    port: 9000,
    open: true,
    contentBase: path.join(__dirname, "dist"),
  },
  plugins: [new ExtractCss({ filename: "css/index.css" })],
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [ExtractCss.loader, "css-loader", "sass-loader"],
      },
    ],
  },
};
