const webpack = require('webpack');

// Add React-specific configuration
function getWebpackConfig(config) {
  config.module.rules.push(
    {
      test: /\.(png|jpe?g|gif|webp)$/,
      loader: 'url-loader',
      options: {
        limit: 10000, // 10kB
        name: '[name].[hash:7].[ext]'
      }
    },
    {
      test: /\.svg$/,
      oneOf: [
        // If coming from JS/TS file, then transform into React component using SVGR.
        {
          issuer: {
            test: /\.[jt]sx?$/
          },
          use: [
            '@svgr/webpack?-svgo,+titleProp,+ref![path]',
            {
              loader: 'url-loader',
              options: {
                limit: 10000, // 10kB
                name: '[name].[hash:7].[ext]'
              }
            }
          ]
        },
        // Fallback to plain URL loader.
        {
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000, // 10kB
                name: '[name].[hash:7].[ext]'
              }
            }
          ]
        }
      ]
    }
  );

  // Otherwise, shared entities between the API layer and UI layer
  // that use TypeGraphQL will cause webpack to throw compilation errors.
  config.plugins.push(
    new webpack.NormalModuleReplacementPlugin(/type-graphql$/, (resource) => {
      resource.request = resource.request.replace(
        /type-graphql/,
        'type-graphql/dist/browser-shim.js'
      );
    })
  );

  return config;
}

module.exports = getWebpackConfig;
