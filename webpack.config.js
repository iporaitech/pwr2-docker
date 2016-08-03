const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    app: ["./web/static/css/app.css", "./web/static/js/app.js"]
  },
  output: {
    path: "./priv/static",
    filename: "js/[name].js",
    chunkFilename: "js/[id].js"
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('js/commons.chunk.js'),
    new ExtractTextPlugin("css/app.css", {
      allChunks: true // put css of all chunks in app.css
    })
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        plugins: ['./babelRelayPlugin', 'transform-runtime'],
        presets: ['react', 'es2015', 'stage-0']
      }
    },{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract("style", "css")
    }]
  }
};
