var path = require('path');

module.exports = {
  mode: 'development', // 'development' 'production'
  entry: {
    admin: './dst/Admin/Admin.js',
    index: './dst/Index/Index.js',
  }, 
  output: {
    path: path.resolve(__dirname + '/public/js'),
    filename: '[name].js'
  }
};