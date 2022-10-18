let mode = 'development';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

if (process.env.NODE_ENV === 'production') {
  mode = 'production';
}

module.exports = {
  mode: mode,

  module: {
    rules: [
      {
        test: /.\(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource'
      },
      {
        test: /.\js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /.\s?css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: '' },
          },
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin(),
  ],

  devtool: 'source-map',
  devServer: {
    static: './dist',
    hot: true,
  },
}