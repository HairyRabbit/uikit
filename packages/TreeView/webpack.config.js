const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackTemplate = require('html-webpack-template')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'
const env = isProd ? 'production' : 'development'


module.exports = {
  mode: env,
  entry: isProd ? './index.js' : './boot.js',
  output: {
    path: path.resolve('lib'),
    filename: 'tree-view.js',
    library: 'TreeView',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
      { test: /\.css$/, use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          { loader: 'css-loader', options: {
            modules: true,
            importLoader: 1,
            minimize: isProd,
            localIdentName: isProd ? '[hash:base64:8]' : '[path][name]__[local]--[hash:base64:5]'
          }},
          'postcss-loader'
        ]
      })}
    ]
  },
  externals: isProd ? {
    'react': 'React'
  } : {},
  plugins: [].concat(
    !isProd ? new HtmlWebpackPlugin({
      inject: false,
      template: HtmlWebpackTemplate,
      appMountId: 'app'
    }) : [],
    new ExtractTextPlugin("tree-view.css")
  )
}
