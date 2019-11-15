const webpack = require('webpack');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        resolve(__dirname, "src", "index.jsx")
    ],

    output: {
        filename: 'app.bundle.js',
        path: resolve(__dirname, 'build'),
        publicPath: '/'
    },

    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    devtool: '#source-map',

    devServer: {
        hot: true,
        contentBase: resolve(__dirname, 'build'),
        publicPath: '/'
    },

    module: {
        
        rules: [
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            },
            {
                test: /^(?!.*\.generated\.ttf$).*\.ttf$/,
                use: ['css-loader', 'fontface-loader'],
            }, {
                test: /\.generated.(ttf|eot|woff|woff2)$/,
                use: ['file-loader'],
            },
            {
                test: /\.css$/i,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.ttf$/,
                use: [
                    {
                        loader: 'ttf-loader',
                        options: {
                            name: './font/[hash].[ext]',
                        },
                    },
                ]
            },
            {
                test: /\.jsx?$/,
                enforce: "pre",
                loader: "eslint-loader",
                exclude: /node_modules/,
                options: {
                    emitWarning: true,
                    configFile: "./.eslintrc.json"
                }
            },
            {
                test: /\.(png|gif|jp(e*)g|svg|woff)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8000,
                        name: 'images/[hash]-[name].[ext]'
                    }
                }
            },
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: [
                        ["es2015", { "modules": false }],
                        "react",
                    ],
                    plugins: [
                        "react-hot-loader/babel",
                        "styled-jsx/babel"
                    ]
                }
            }
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            template: 'template.ejs',
            appMountId: 'react-app-root',
            title: 'Ales From the Crypt',
            filename: resolve(__dirname, "build", "index.html"),
        }),
    ]
};