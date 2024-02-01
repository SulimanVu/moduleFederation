import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack, { container } from "webpack";
import { BuildOptions } from "./types/config";

export function buildPlugins({
  paths,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new container.ModuleFederationPlugin({
      name: "host",
      filename: "remoteEntry.js",
      remotes: {
        counter: "counter@http://localhost:3001/remoteEntry.js",
      },
    }),
  ];
}
