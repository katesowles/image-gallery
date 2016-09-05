// filename : webpack.config.js

const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const EnvironmentPlugin = require('webpack').EnvironmentPlugin;

module.exports = {
  entry: './app/src/main.js',
  output: {
    path: './server/dist',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/src/index.html'
    }),
    new EnvironmentPlugin(['API_URL'])
  ],
  module: {
    preLoaders: [{
      test: /\.js$/,
      loader: 'eslint-loader',
      exclude: /node_modules/
    }],
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        cacheDirectory: true
      }
    },
    {
      test: /\.css$/,
      loader: 'style!css?sourceMap'
    },
    {
      test: /\.scss$/,
      loader: 'style!css?sourceMap!sass?sourceMap'
    },
    {
      test: /\.html$/,
      loader: 'html'
    }]
  }
};
