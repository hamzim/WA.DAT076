var path = require('path');
var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanPlugin       = require('clean-webpack-plugin');
var appEnv = process.env.NODE_ENV || 'development';

var config = {
  devtool: 'eval',
  entry: './src/client/bootstrap.js',
  output: {
    path: './dist/public',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.js']
  },
  module: {
    loaders:[
      {
        //test: /\.js?$/,
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: [
          path.resolve(__dirname, "node_modules")
        ],
        include: [
          path.resolve(__dirname, "src")
        ],
        query: {
          plugins: ['transform-decorators-legacy'],
          presets: ['es2015', 'stage-0', 'react']
        }
        //'babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-0,plugins[]=transform-decorators-legacy'
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      }
    ]
  },

  // webpack dev server configuration
  devServer: {
    contentBase: "./src",
    noInfo: false,
    hot: false
  }
};

if (appEnv === 'development') {
  config.devtool = '#inline-source-map';
}

if (appEnv === 'production') {
  config.plugins.push(
    // Remove build related folders
    new CleanPlugin(['dist'])
  );
}

module.exports = config;
