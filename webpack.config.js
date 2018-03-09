const { kebabCase } = require('lodash')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackTemplate = require('html-webpack-template')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
    filename: moduleName + '.js'
    // library: isDemo ? name : undefined,
    // libraryTarget: isDemo ? 'umd' : undefined
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
      { test: /\.css$/, use: [
        true ? MiniCssExtractPlugin.loader : 'style-loader',
        { loader: 'css-loader', options: {
          modules: true,
          importLoader: 1,
          minimize: isProd,
          localIdentName: isProd
            ? '[hash:base64:8]'
            : '[path][name]__[local]--[hash:base64:5]'
        }},
        'postcss-loader'
      ]}
      // { test: /\.css$/, use: ExtractTextPlugin.extract({
      //   fallback: 'style-loader',
      //   use: [
          // { loader: 'css-loader', options: {
          //   modules: true,
          //   importLoader: 1,
          //   minimize: isProd,
          //   localIdentName: isProd
          //     ? '[hash:base64:8]'
          //     : '[path][name]__[local]--[hash:base64:5]'
          // }},
          // 'postcss-loader'
      //   ]
      // })}
      ,
      { test: /\.svg/, use: 'url-loader' }
    ]
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        cssDedupe: {
          test: /\.css$/,
          chunks: 'all',
          minChunks: 1,
          enforce: true
        }
      }
    }
  },
  plugins: [].concat(
    new HtmlWebpackPlugin({
      inject: false,
      template: HtmlWebpackTemplate,
      appMountId: 'app',
      scripts: [
        'https://unpkg.com/react@16.2.0/umd/react.development.js',
        'https://unpkg.com/react-dom@16.2.0/umd/react-dom.production.min.js'
      ],
      headHtmlSnippet: `
<script>
      (function(l) {
        if (l.search) {
          var q = {};
          l.search.slice(1).split('&').forEach(function(v) {
            var a = v.split('=');
            q[a[0]] = a.slice(1).join('=').replace(/~and~/g, '&');
          });
          if (q.p !== undefined) {
            window.history.replaceState(null, null,
              l.pathname.slice(0, -1) + (q.p || '') +
              (q.q ? ('?' + q.q) : '') +
              l.hash
            );
          }
        }
      }(window.location))
</script>`
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
    // new ExtractTextPlugin({
    //   filename: moduleName + '.css',
    //   allChunks: true,
    //   ignoreOrder: true,
    //   disable: !isProd
    // })
    new MiniCssExtractPlugin({
      filename: moduleName + '.css'
    })
  )
}
