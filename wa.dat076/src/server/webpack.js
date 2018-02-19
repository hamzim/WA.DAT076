import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import config from './../webpack.config';

var myConfig = config;
myConfig.output.path = '/';
const compiler = webpack(myConfig);

const Webpack = (app) => {
  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {
      colors: true,
      chunks: false
    }
  }));
  app.use(webpackHotMiddleware(compiler, {
    log: console.log
  }));
};

export default Webpack;
