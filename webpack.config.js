const path = require('path');

const outputPath = path.resolve(__dirname, 'dist');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: outputPath
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpeg|jpg|png|gif|svg|icon)$/i,
        loader: 'url-loader',
        options: {
          limit: 2048,
          name: './images/[name].[ext]'
        }
      },
    ]
  },
  devServer: {
    contentBase: outputPath
  }
}
