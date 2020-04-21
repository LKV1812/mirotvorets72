module.exports = {
  entry: {
    main: './src/js/main.js',
    'containers-sale': './src/js/containers-sale.js',
  },
  output: {
    filename: `[name].js`,
    publicPath: '/'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: ["/node_modules/", "/src/libs/"]
      },
    ]
  },
  mode: 'production',
};

// const merge = require('webpack-merge');
// const baseWebpackConfig = require('./webpack.base.config');
// const buildWebpackConfig = merge(baseWebpackConfig, {
//   mode: 'production'
// });
// module.exports = new Promise((resolve, reject) => {
//   resolve(buildWebpackConfig);
// });
