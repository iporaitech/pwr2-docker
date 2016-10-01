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
    ]
  },
  entry: {
    vendor: Object.keys(pkg.dependencies).filter(function(pkgName){
      // vendor and app use runtime from commons chunk
      return pkgName != "babel-runtime"
    }),
    app: "./web/static/js/index"
  },
  output: {
    path: "./priv/static",
    filename: "js/app.bundle.js"
  },
  plugins: [
    // NOTICE: the order of CommonsChunkPlugin is important!
    new webpack.optimize.CommonsChunkPlugin('vendor', 'js/vendor.bundle.js'),
    new webpack.optimize.CommonsChunkPlugin('js/commons.chunk.js'),
    new ExtractTextPlugin("css/app.css", {
      allChunks: true // put css of all chunks in app.css
    }),
    new webpack.DefinePlugin({
      // Define here some global CONFIG "constants" needed in the frontend
      GRAPHQL_URL: JSON.stringify(process.env.GRAPHQL_URL)
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
      // Loader for MDL and GraphiQL need special treatment because its JS depends on class names
      test: /\.css$/,
      include: [
        /material-design-lite/,
        /graphiql/
      ],
      loader: ExtractTextPlugin.extract(
        'style-loader?sourceMap',
        'css?modules&importLoaders=1&localIdentName=[local]'
      )
    },{
      // Loader for the rest of the css
      test: /\.css$/,
      exclude: [
        /material-design-lite/,
        /graphiql/
      ],
      loader: ExtractTextPlugin.extract(
        'style-loader?sourceMap',
        'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
      )
    }]
  }
};
