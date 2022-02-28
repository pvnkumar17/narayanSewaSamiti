const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  //Where files should be sent once they are bundled
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.bundle.js'
  },
  //webpack 5 comes with devServer which loads in development mode
  devServer: {
    port: 3009
  },
  //Rules of how webpack will take our files, complie & bundle them for the browser 
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": [
                "@babel/preset-env",
                "@babel/preset-react"
            ]
         }
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              sourceMap: true
            },
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              postcssOptions: {
                plugins: [
                  [
                    autoprefixer()
                  ]
                ]
              }
            }
          },
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                includePaths: [resolveApp('node_modules')]
              }
            }
        }],
      },
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
}