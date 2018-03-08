const { kebabCase } = require('lodash')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackTemplate = require('html-webpack-template')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'
const env = isProd ? 'production' : 'development'
const name = process.env.UIKITPKG
const isDemo = 'true' === name

if(!name) {
  throw new Error('No UIKITPKG')
}

const moduleName = isDemo ? 'main' : kebabCase(name)

module.exports = {
  mode: env,
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: moduleName + '.js',
    library: isDemo ? name : undefined,
    libraryTarget: isDemo ? 'umd' : undefined
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
            localIdentName: isProd
              ? '[hash:base64:8]'
              : '[path][name]__[local]--[hash:base64:5]'
          }},
          'postcss-loader'
        ]
      })},
      { test: /\.svg/, use: 'url-loader' }
    ]
  },
  plugins: [].concat(
    new HtmlWebpackPlugin({
      inject: false,
      template: HtmlWebpackTemplate,
      appMountId: 'app'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: HtmlWebpackTemplate,
      filename: '404.html',
      headHtmlSnippet: `
<script>
      var segmentCount = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + segmentCount).join('/') + '/?p=/' +
        l.pathname.slice(1).split('/').slice(segmentCount).join('/').replace(/&/g, '~and~') +
        (l.search ? '&q=' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );
</script>`
    }),
    new ExtractTextPlugin(moduleName + '.css')
  )
}
