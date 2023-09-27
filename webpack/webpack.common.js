const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: path.resolve(__dirname, '..', './src/index.jsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.css', '.scss'],
    fallback: {
      "fs": false,
      "os": false,
      "path": false,
    }
    },
  module: {
      rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
        {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg|webp|mp4)$/i,
        type: 'asset/resource',
      },
      { test: /\.mp4$/, type: "asset/source" },
      // {
      //   test: /\.(png|jpg|webp|gif|svg)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //     },
      //   ],
      // },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|mp4)$/,
        type: 'asset/inline',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
    new NodePolyfillPlugin()
  ]
 
  }