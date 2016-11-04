const webpack = require('webpack');
const path = require('path');
const rootDir = __dirname;
const pkg = require(path.resolve(rootDir, 'package.json'));
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: "cheap-source-map",
  context: rootDir,
  resolve: {
    root: [
      rootDir,
      path.resolve('./web/static/js')
    ],
    extensions: ['', '.js', '.css', '.scss']
  },
  entry: {
    polyfill: "babel-polyfill",
    vendor: Object.keys(pkg.dependencies).filter(function(pkgName){
      // TODO: review this babel-runtime config now that we only have vendor and app
      return pkgName != "babel-runtime"
    }),
    app: "./web/static/js/index"
  },
  output: {
    path: "./priv/static",
    filename: "js/[name].js"
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      chunks: ['vendor', 'app']
    }),
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
        plugins: [
          path.resolve(rootDir, 'web/static/js/babelRelayPlugin'),
          'transform-runtime'
        ],
        presets: ['react', 'es2015', 'stage-0']
      }
    },{
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
    }]
  }
};
