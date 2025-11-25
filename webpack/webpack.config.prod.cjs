const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].[contenthash].js",
  },
  mode: "production",
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
          priority: -10
        }
      }
    },
    runtimeChunk: {
      name: "runtime"
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS (explicit `sass` implementation and source maps)
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
              sourceMap: true,
              api: "modern",
            },
          },
        ],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
  devtool: "source-map",
  performance: {
    hints: "warning",
    // keep recommended sizes but you can tune these to your app's needs
    maxEntrypointSize: 244000,
    maxAssetSize: 244000
  },
};
