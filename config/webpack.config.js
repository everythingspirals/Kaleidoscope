var path = require('path'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    webpack = require('webpack');


//PostCSS Loader
var postCSSLoader = {
      test: /\.css$/,
      loader: "style-loader!css-loader!postcss-loader"
};

//Babel Loader
var babelLoader = {
      test: /\.js/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
          presets: ['es2015', 'react', 'stage-2']
      }
};

module.exports = {

    //Entry
    entry:  ['babel-polyfill', './src/app/app.js'],

    //Output
    output: {
        filename: './build/bundle.js'
    },

    //Loaders
    module: {
        loaders: [
          babelLoader,
          postCSSLoader
        ]
    },

    //Plugins
    plugins: [
      new CopyWebpackPlugin([
        {from: './src/public', to: './build'}
      ]),
      new webpack.DefinePlugin({
       'process.env':{
         'NODE_ENV': JSON.stringify('production')
       }
     }),
    ],

    //Dev Tools
    devtool: 'source-map',

    //Resolve
    resolve: {
     root: path.resolve('./src/app'),
     extensions: ['', '.js']
   }
}
