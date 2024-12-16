import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

export default {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve("dist"),
    filename: "bundle.js",
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: "tsconfig.json",
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        type: "asset/resource",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
    new ForkTsCheckerWebpackPlugin(),
  ],
  devServer: {
    static: {
      directory: "./dist",
    },
    compress: true,
    port: 5173,
    hot: true,
  },
  mode: "development",
};
