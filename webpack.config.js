let mode = 'development';

if (process.env.NODE_ENV === 'production') {
  mode = 'production';
}

module.exports = {
  mode: mode,

  devServer: {
    static: './dist',
    hot: true,
  },
}