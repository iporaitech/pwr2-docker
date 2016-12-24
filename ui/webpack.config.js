const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const buildBabelLoader = function(entryName) {
  return {
    test: /\.jsx?$/,
    loader: 'babel',
    include: path.resolve(`./${entryName}`),
    query: {
      plugins: [
        path.resolve(`./${entryName}/src/babelRelayPlugin`),
        'transform-runtime'
      ],
      presets: ['react', 'es2015', 'stage-0']
    }
  }
}

module.exports = {
  devtool: "cheap-module-eval-source-map",
  context: __dirname,
  resolve: {
    root: path.resolve(__dirname),
    alias: {
      core: 'core/src',
      star_wars: 'star_wars/src'
    }
  },
  entry: {
    polyfill: "babel-polyfill",
    star_wars: "./star_wars/src",
    core: "./core/src"
  },
  output: {
    path: "../apps/webapp/priv/static",
    filename: "js/[name].js"
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin("js/common.js") ,
    new ExtractTextPlugin("css/[name].css", {
      allChunks: true // put css of all chunks in app.css
    })
  ],
  module: {
    loaders: [
      buildBabelLoader('core'),
      buildBabelLoader('star_wars'),
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style?sourceMap',
          [
            'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
            'resolve-url',
            'sass?sourceMap'
          ]
        )
      },{
        test: /\.json$/,
        loader: 'json'
      }
    ]
  }
};
