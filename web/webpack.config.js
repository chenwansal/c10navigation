var path = require('path');

module.exports = {
  mode: 'production', // 'development' 'production'
  entry: './js/index.js',
  output: {
    path: __dirname + '/js/out',
    filename: 'bundle.js'
  }
};