var path = require('path');
var webpack = require("webpack");
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const pkg = require('./package.json');

module.exports = {
  entry: {
    app: "./src/index.js",
    vendor: Object.keys(pkg.dependencies)
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name]-[chunkhash].js',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name : 'vendor',
      minChunks: ({ resource }) => /node_modules/.test(resource),
    }),
    new BundleAnalyzerPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  externals: {
    "preact": "preact"
  },
  devServer: {
    hot: true, // Tell the dev-server we're using HMR
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  }
};
