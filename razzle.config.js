const assetFilter = (assetFilename) => {
  const isSrcMap = /\.map$/.test(assetFilename);
  const isVendorBundle = /vendor/.test(assetFilename);
  return !(isSrcMap || isVendorBundle);
};

module.exports = {
  modify: require('razzle-heroku'),
  plugins: [
    useRuntimePortEnvironmentVariable,

    WebpackSplitChunksRazzlePlugin({
      chunks: 'all', // include both initial and async (lazy-loaded) chunks
      maxInitialRequests: Infinity,
      minSize: 0 // default is 30000
    }),

    WebpackPerformanceHintsRazzlePlugin({
      // Use a custom assetFilter to not warn about big source maps or vendor bundle
      // This is intended to keep Travis CI from griping about the vendor bundle size.
      assetFilter
    }),

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

/**
 * Update config to use process.env.PORT provided at *runtime*, not build-time, which is the default behavior
 * https://github.com/jaredpalmer/razzle/issues/906#issuecomment-467046269
 */
function useRuntimePortEnvironmentVariable(config, { target, dev }, webpack) {
  const appConfig = Object.assign({}, config);

  // @BUG: Do not inline certain env vars; https://github.com/jaredpalmer/razzle/issues/356
  if (target === 'node') {
    const idx = appConfig.plugins.findIndex(
      (plugin) => plugin.constructor.name === 'DefinePlugin'
    );
    const { definitions } = appConfig.plugins[idx];
    const newDefs = Object.assign({}, definitions);

    delete newDefs['process.env.PORT'];
    delete newDefs['process.env.HOST'];
    delete newDefs['process.env.PUBLIC_PATH'];

    appConfig.plugins = [].concat(appConfig.plugins);
    appConfig.plugins[idx] = new webpack.DefinePlugin(newDefs);
  }

  return appConfig;
}

/**
 * Razzle Plugin to split common libraries into a chunk named 'vendor'.
 * The idea is that this bundle will change way less often than the src code
 * of this app, so will mean less average download size because vendor can be cached.
 * Taken from https://github.com/jaredpalmer/razzle/tree/master/examples/with-vendor-bundle
 */
function WebpackSplitChunksRazzlePlugin(pluginOptions = {}) {
  return function WebpackSplitChunksRazzlePluginFunc(
    razzleConfigBefore,
    { target, dev },
    webpack
  ) {
    const config = Object.assign({}, razzleConfigBefore);

    // Change the name of the server output file in production
    if (target === 'web') {
      // modify filenaming to account for multiple entry files
      config.output.filename = dev
        ? 'static/js/[name].js'
        : 'static/js/[name].[hash:8].js';

      // I think these are the default that webpack sets
      // https://webpack.js.org/plugins/split-chunks-plugin/#optimizationsplitchunks
      const defaultSplitChunksConfig = {
        chunks: 'async',
        minSize: 30000,
        maxSize: 0,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        automaticNameDelimiter: '~',
        automaticNameMaxLength: 30,
        name: true,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
          }
        }
      };
      config.optimization.splitChunks = {
        ...defaultSplitChunksConfig,
        ...config.optimization.splitChunks,
        ...pluginOptions
      };
    }

    return config;
  };
}

function WebpackPerformanceHintsRazzlePlugin(pluginOptions) {
  return function WebpackPerformanceHintsRazzlePluginFunc(config) {
    return {
      ...config,
      performance: {
        assetFilter,
        ...config.performance
      }
    };
  };
}
