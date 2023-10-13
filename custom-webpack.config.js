const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  // Webpack configuration options go here

  // Entry point of your application
  entry: './src/main.ts',

  // Output configuration
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  // Resolve TypeScript and JavaScript files
  resolve: {
    extensions: ['.ts', '.js'],
  },

  // Module rules
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['ts-loader'],
      },
      // Add Babel loader for JavaScript files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },

  // Plugins
  plugins: [
    // Generate an HTML file with the bundle script injected
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),

    // Copy static assets to the output directory
    new CopyWebpackPlugin([{ from: 'src/assets', to: 'assets' }]),

    // Define environment variables
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],

  // Development server configuration (if needed)
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 4200,
  },

  // Other Webpack options...
};
