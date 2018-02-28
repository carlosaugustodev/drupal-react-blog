const path = require('path');
const glob = require('glob');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');


module.exports = {
    webpack: (config, options) => {
        const { dev, isServer } = options

        if (!isServer) {
            config.module.rules.push(
              {
                test: /\.css$/,
                use: [
                  require.resolve('style-loader'),
                  {
                    loader: require.resolve('css-loader'),
                    options: {
                      importLoaders: 1,
                      minimize: true
                    },
                  },
                  {
                    loader: require.resolve('postcss-loader'),
                    options: {
                      // Necessary for external CSS imports to work
                      // https://github.com/facebookincubator/create-react-app/issues/2677
                      ident: 'postcss',
                      plugins: () => [
                        require('postcss-flexbugs-fixes'),
                        autoprefixer({
                          browsers: [
                            '>1%',
                            'last 4 versions',
                            'Firefox ESR',
                            'not ie < 9', // React doesn't support IE8 anyway
                          ],
                          flexbox: 'no-2009',
                        }),
                      ],
                    },
                  },
                ],
              },
              {
                test: /\.scss$/,
                include: [
                  path.resolve(__dirname, 'node_modules'),
                  path.resolve(__dirname, 'styles')
                ],
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: [
                      {
                        loader: 'postcss-loader',
                      },
                      {
                        loader: 'sass-loader',
                        options: {
                          sourceMap: false,
                        }
                      }
                    ]
                  }
                )
              }
            )
          config.plugins.push(
            new ExtractTextPlugin("../src/static/css/styles.css")
          )
        } else {
            config.module.rules.push(
                {
                    test: /\.scss$/,
                    use: ['null-loader']
                }
            );
        }
        
        return config;
    },
    distDir: '../build'
};