var webpack = require('webpack'),
    path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    entry: {
        index: [
            path.join(__dirname, 'src/index.js')
        ],
        vendor: [  // pack react and react-dom independently
            "react",
            "react-dom",
            "react-bootstrap",
            "jquery"
        ]
    },
    output: {
        path: path.join(__dirname, '/dist_prod/'),
        filename: "js/[name]-[hash].min.js",
        publicPath: './'
    },
    module: {
        loaders: [{    // babel loader
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }, {
            test: /\.(scss|sass|css)$/,  // pack sass and css files
            loader: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader!sass-loader"})
        }, {
            test: /\.(png|jpg|jpng)$/, // pack images
            loader: 'url-loader?limit=8192&name=resource/image/[name].[hash:8].[ext]'
        },
        { 
            test: /\.(woff|woff2|eot|ttf|svg)(\?[a-z0-9]+)?$/,
            loader: 'url-loader?limit=1000&name=resource/fonts/[name].[hash:6].[ext]' 
        },
        {
            test: require.resolve('jquery'),
            loader: 'expose-loader?$!expose-loader?jQuery', // jQuery and $
        }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: 'src/index.tpl.html',
          inject: 'body',
          filename: 'index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin("vendor.bundle.js"), //packed independently such as react and react-dom
        new ExtractTextPlugin("[name]-[hash].min.css"), // pack all the sass and css files into css file
        new webpack.optimize.UglifyJsPlugin({ // handles uglifying js
            compressor: {
                warnings: false,
                screw_ie8: true
            }
        }),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: function () {
                    return [require('autoprefixer')];
                }
            }
        })
    ]
};

module.exports = config;