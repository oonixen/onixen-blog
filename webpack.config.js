const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const PATHS = {
    src: path.join(__dirname, 'src'),
    dist: path.join(__dirname, 'dist')
}

const config = {
    entry: {
        app: `${PATHS.src}/app.js`
    },
    output: {
        path: PATHS.dist,
        filename: "[name].[contenthash].js"
    },
    devServer: {
        port: 3000
    },
    module: {
      rules: [
          {
              test: /\.pug$/,
              use: ["pug-loader"]
          },
          {
              test: /\.scss$/,
              use: [
                  'style-loader',
                  {
                      loader: MiniCssExtractPlugin.loader,
                      options: {
                          esModule: false
                      }
                  },
                  'css-loader',
                  'sass-loader',
                  'postcss-loader'
              ]
          },
          {
              test: /\.(js)$/,
              exclude: /node_modules/,
              use: ['babel-loader']
          }
      ]
    },
    resolve: {
        extensions: ['*', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `${PATHS.src}/index.pug`
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new CopyWebpackPlugin({
            patterns:[{
                from: `${PATHS.src}/img`,
                to: 'img'
            }]
        })
    ]
}


module.exports = (env, argv) => {
    if (argv.mode === 'development') {}
    if (argv.mode === 'production') {}

    return config
}