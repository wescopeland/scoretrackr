const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  modify: require('razzle-heroku'),
  plugins: [
    compressionPlugin,

    {
      name: 'typescript',
      options: {
        forkTsChecker: {
          tsconfig: './tsconfig.json',
          tslint: './tslint.json',
          watch: './src',
          typeCheck: true
        }
      }
    }
  ]
};

function compressionPlugin(config, env) {
  const { dev } = env;

  if (!dev) {
    config.plugins.push(
      new CompressionPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0.8
      })
    );

    config.plugins.push(
      new CompressionPlugin({
        filename: '[path].br[query]',
        algorithm: 'brotliCompress',
        test: /\.(js|css|html|svg)$/,
        compressionOptions: {
          level: 11
        },
        threshold: 10240,
        minRatio: 0.8
      })
    );
  }

  return config;
}
