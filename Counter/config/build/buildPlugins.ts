import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack, { container } from "webpack";
import { BuildOptions } from "./types/config";
import packageJson from "../../package.json";

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
      name: "counter",
      filename: "remoteEntry.js",
      exposes: {
        "./Counter": paths.counter,
        // "./Counter": "./src/components/Counter.tsx",
      },
    }),
  ];
}
