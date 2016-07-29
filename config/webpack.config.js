const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    app: "./web/static/js/app.js"
  },
  output: {
    path: "./priv/static/js",
    filename: "[name]-bundle.js"
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('commons.chunk.js')
  ],
  module: {
    loaders: [{
      loader: 'babel',
      test: /\.jsx?$/,
      exclude: /node_modules/,
      query: {
        plugins: ['transform-runtime'],
        presets: ['react', 'es2015', 'stage-0']
      }
    }]
  }
};
