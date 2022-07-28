const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/components/Index.jsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'clientbundle.js',
    assetModuleFilename: 'img/[hash]][ext][query]',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        exclude: '/src/Clients/EditorClient/public/img',
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts', '.json'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      exclude: path.resolve(
        __dirname,
        './src/Clients/EditorClient/public/index.html'
      ),
      favicon: './public/img/newgen.ico',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/style.[fullhash:8].css',
      chunkFilename: 'css/[id].style.[fullhash:8].css',
    }),
  ],
  stats: 'errors-only',
}
