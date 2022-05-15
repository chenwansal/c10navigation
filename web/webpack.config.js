var path = require('path');

module.exports = {
  mode: 'production', // 'development' 'production'
  entry: {
    admin: './dst/Admin/Admin.js',
    index: './dst/Index/Index.js',
  }, 
  output: {
    path: path.resolve(__dirname + '/js'),
    filename: '[name].js'
  }
};