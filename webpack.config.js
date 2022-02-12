const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "my app",
      filename: "index.html",
      template: "src/index.html",
    }),
    // new MiniCssExtractPlugin({
    //     filename: "[name].[contenthash].css",
    //     chunkFilename: "[id].[contenthash].css",
    //     ignoreOrder: false,
    //   }),
  ],
  module: {
    rules: [
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
      },
    ],
  },
};
