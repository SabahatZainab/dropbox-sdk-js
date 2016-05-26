var webpack = require('webpack')

module.exports = {

  entry: __dirname + '/src/dropbox-api.js',

  output: {
    filename: 'dropbox-sdk.min.js',
    library: 'DropboxApi',
    libraryTarget: 'umd',
    path: __dirname + '/dist'
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin()
  ]

}