const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack'); // Import webpack to use DefinePlugin
const Dotenv = require('dotenv-webpack'); // Import dotenv-webpack

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'static/main.js', // Output JS to 'static/main.js' inside the build folder
    path: path.resolve(__dirname, 'build'), // Output to the 'build' folder
    publicPath: '/', // Set the base path for all assets (JS, CSS, images)
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/images/[name][ext]', // Output images to 'static/images/' inside the build folder
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'], // Extract CSS to a separate file
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Use your React `index.html` as a template
      filename: 'index.html', // Output 'index.html' in the root of the 'build' folder
    }),
    new MiniCssExtractPlugin({
      filename: 'static/main.css', // Output CSS to 'static/main.css' inside the build folder
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public/static/images', to: 'static/images' }, // Copy images from 'public/static/images' to 'static/images'
      ],
    }),
    new Dotenv({
      path: './.env.production', // Path to your production environment variables file
      safe: true, // Load .env.example to verify the .env variables are all set
      systemvars: true, // Load system environment variables as well
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env) // Embed environment variables into the build
    }),
  ],
  mode: 'production',
};