const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


//
// Define some helper functions
//
const buildBabelLoader = function(entryName) {
  return {
    test: /\.jsx?$/,
    loader: 'babel-loader',
    include: path.resolve(__dirname, `${entryName}`),
    options: {
      plugins: [
        path.resolve(`./${entryName}/src/babelRelayPlugin`),
        'transform-runtime'
      ],
      presets: ['react', ['es2015', {"modules": false}], 'stage-0']
    }
  }
}

//
// Export final webpack configuration
//
module.exports = {
  devtool: "cheap-module-eval-source-map",
  context: __dirname,
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname)
    ],
    alias: {
      core: 'core/src',
      star_wars: 'star_wars/src'
    }
  },
  entry: {
    polyfill: "babel-polyfill",
    star_wars: "./star_wars/src",
    core: "./core/src",
  },
  output: {
    path: "../apps/webapp/priv/static",
    filename: "js/[name].js",
    chunkFilename: "js/[id].chunk.js"
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'js/common.js',
      chunks: ["core", "star_wars"]
    }),
    new ExtractTextPlugin("css/[name].css")
  ],
  module: {
    rules: [
      buildBabelLoader('core'),
      buildBabelLoader('star_wars'),
      {
        test: /(react-select|graphiql)\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: "style-loader",
          loader: "css-loader?source!resolve-url-loader",
        })
      },{
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: [
            'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
            'resolve-url-loader',
            'sass-loader?sourceMap'
          ]
        })
      }
    ]
  }
};
