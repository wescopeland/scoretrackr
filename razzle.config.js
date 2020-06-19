const CompressionPlugin = require('compression-webpack-plugin');
const makeLoaderFinder = require('razzle-dev-utils/makeLoaderFinder');

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
    },

    graphqlLoaderPlugin
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

function graphqlLoaderPlugin(config, env, webpack, options) {
  // Razzle's file-loader config will try to serve graphql files as
  // a static asset by default. This resolves the issue.
  // https://github.com/jaredpalmer/razzle/issues/433#issuecomment-403236619
  config.module.rules[
    config.module.rules.findIndex(makeLoaderFinder('file-loader'))
  ].exclude.push(/\.graphql$/);

  config.module.rules.push({
    test: /\.graphql?$/,
    use: [
      {
        loader: 'webpack-graphql-loader',
        options: {
          output: 'string'
        }
      }
    ]
  });

  return config;
}
