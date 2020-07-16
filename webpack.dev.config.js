const webpack = require('webpack');

module.exports = {
  entry: {
    main: './src/js/main.js',
    'containers-sale': './src/js/containers-sale.js',
    'price-page': './src/js/price-page.js',
    'packing-rules': './src/js/packing-rules.js',
    buy: './src/js/buy.js',
    contacts: './src/js/contacts.js',
    destruction: './src/js/destruction.js',
    storage: './src/js/storage.js',
    'question-answer': './src/js/question-answer.js',
    projects: './src/js/projects.js',
    ecopromo: './src/js/ecopromo.js',
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
        exclude: ["/node_modules/", "/src/libs/", "/src/libs/bootstrap/"]
      },
    ]
  },
  mode: 'development',
  devtool: '#@cheap-eval-source-map',
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map'
    })
  ]
};

// const merge = require('webpack-merge');
// const baseWebpackConfig = require('./webpack.base.config');
// const devWebpackConfig = merge(baseWebpackConfig, {
//   mode: 'development',
//   devtool: '#@cheap-eval-source-map',
//   devServer: {
//     contentBase: baseWebpackConfig.externals.paths.dist,
//     port: 8081,
//     overlay: {warnings: true, errors: true}
//   },
//   plugins: [
//     new webpack.SourceMapDevToolPlugin({
//       filename: '[file].map'
//     })
//   ]
// });

// module.exports = new Promise((resolve, reject) => {
//   resolve(devWebpackConfig);
// });
