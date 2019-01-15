const path = require("path");
const webpack = require("webpack");
const argv = require("yargs").argv;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const isDevelopment = argv.mode === "development";
const isProduction = !isDevelopment;
const distPath = path.join(__dirname, "dist");

const config = {
    context: path.resolve(__dirname, "src"),
    entry: {
        main: "./js/index.js"
    },
    output: {
        filename: "js/bundle.js",
        path: distPath
        // publicPath: '/dist'
    },
    module: {
        rules: [{
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: ['img:src', 'link:href', 'image:xlink:href']
                    }
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }]
            },
            {
                test: /\.(sc|sa)ss$/,
                exclude: /node_modules/,
                use: [
                    isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            minimize: isProduction
                        }
                    },
                    "sass-loader"
                    // "resolve-url-loader"
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/,
                use: [{
                        loader: "file-loader",
                        options: {
                            name: "img/[name].[ext]",

                        }
                    },
                    // {
                    //     loader: "url-loader",
                    //     options: {
                    //         limit: 5000,
                    //         name: "img/[name].[ext]",
                    //     }
                    // },
                    {
                        loader: "image-webpack-loader",
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 70
                            }
                        }
                    }
                ]
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader'
                // options: { ... }
            },
            {
                test: /\.(mp4|webm)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: 'img/[name].[ext]',

                    }
                }
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: 'fonts/[name].[ext]',

                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(["dist"]),
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "css/[id].css"
        }),
        new HtmlWebpackPlugin({
            template: "./index.html",
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
        }),
        new CopyWebpackPlugin([{
                from: "./img",
                to: "img"
            },
            {
                from: "./fonts",
                to: "fonts"
            },
        ]),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            jquery: "jquery",
            "window.$": "jquery",
            Popper: ["popper.js", "default"]
        })
    ],
    optimization: isProduction ?
        {
            minimizer: [
                new UglifyJsPlugin({
                    sourceMap: true,
                    uglifyOptions: {
                        compress: {
                            inline: false,
                            warnings: false,
                            drop_console: true,
                            unsafe: true
                        }
                    }
                })
            ]
        } :
        {},
    devServer: {
        stats: "errors-only",
        host: '192.168.1.5'
    }
};

module.exports = config;