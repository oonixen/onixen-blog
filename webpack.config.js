const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = {
    entry: {
        app: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].bundle.js"
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
            template: './src/index.pug'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ]
}


module.exports = (env, argv) => {
    if (argv.mode === 'development') {}
    if (argv.mode === 'production') {}

    return config
}