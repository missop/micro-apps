const packageName = require('./package.json').name;

module.exports = {
  webpack: {
    configure: webpackConfig => {
      webpackConfig.output = Object.assign({}, webpackConfig.output, {
        library: `${packageName}-[name]`,
        libraryTarget: 'umd',
        jsonpFunction: `webpackJsonp_${packageName}`,
      });

      return webpackConfig;
    },
  },
};
