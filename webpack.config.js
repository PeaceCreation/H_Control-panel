const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");



module.exports = {
    entry: {
        'build': './src/index.js',
        'assets/js/banner': './src/assets/js/banner.js',
    },
    output: {
        path: path.join(__dirname, "/build"),
        filename: '[name].js',
        clean: true,
    },




//  Server 
devServer: {
  static: {
    directory: path.join(__dirname, '/build'),
  },
  // compress: true,
  port: 9000,
    devMiddleware: {
      writeToDisk: true,
      stats: 'errors-only'
    
  }
},
//  Server 


    module: {
        rules: [
          {
            test: /\.html$/i,
            loader: "html-loader",
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          },
          //Sass Loader
              //   Sass
      {
        test: /\.(sass|css|scss)$/,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Postcss loader
          "postcss-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },

      // File-loader
      // Fonts Loader 
      {
        test: /\.(eot|svg|woff|woff2|ttf)$/i,
        type: 'asset/resource',
        // generator:{
        //     filename: "app/fonts/[name][ext]",
        // }
      },

      //  Babel 
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      }
      // Babel
        ],
      },


      plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: "./src/index.html",
            chunks: ['build']
        }),
        new HtmlWebpackPlugin({
            filename: '/components/button.html',
            template: "./src/components/button.html",
            chunks: ['build']
        }),
        new HtmlWebpackPlugin({
            filename: '/components/textfield.html',
            template: "./src/components/textfield.html",
            chunks: ['build']
        }),
        new HtmlWebpackPlugin({
            filename: '/components/banner.html',
            template: "./src/components/banner.html",
            chunks: ['build', 'assets/js/banner.js']
        }),
        // new CleanWebpackPlugin(),

        new MiniCssExtractPlugin({
          filename: 'assets/css/styles.css'
        }),
    ],
}