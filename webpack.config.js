var path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: './workshops/03_webpack_es6_directives/index.js',
  output: {
    filename: 'bookstore.js',
    path: path.join(__dirname, './workshops/03_webpack_es6_directives/')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        exclude: /node_modules/
      }
    ]
  }
};
