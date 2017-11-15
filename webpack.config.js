const path = require('path');

module.exports = {
  entry: "./app/assets/scripts/App.js",
  output: {
    path:  path.resolve(__dirname, 'app/temp/scripts'),   //"./app/temp/scripts", //relative path, no longer valid
    filename: "App.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015']
        },
        exclude: /node_modules/
      }
    ]
  }
};
