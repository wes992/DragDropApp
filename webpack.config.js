// const path = require("path");
// const HTMLWebPack = require("html-webpack-plugin");

// module.exports = {
//   mode: "development",
//   entry: "./src/app.ts",
//   output: {
//     filename: "[name].bundle.js",
//     path: path.resolve(__dirname, "dist"),
//     publicPath: "/",
//   },
//   devtool: "inline-source-map",
//   devServer: {
//     static: "./dist",
//   },
//   module: {
//     rules: [
//       {
//         test: /\.ts$/,
//         use: "ts-loader",
//         exclude: /node_modules/,
//       },
//     ],
//   },
//   plugins: [new HTMLWebPack()],
//   resolve: {
//     extensions: [".ts", ".js"],
//   },
// };

const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/app.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "dist",
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
