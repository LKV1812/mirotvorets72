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
