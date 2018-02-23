const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'build');
const APP_DIR = path.resolve(__dirname, 'assets');

const extractSass = new ExtractTextPlugin({
    filename: "[name].css"
});

const config = {
    entry: [APP_DIR + '/js/app.js', APP_DIR + '/scss/app.scss'],
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: 'css-loader'
                    }, {
                        loader: 'sass-loader'
                    }]
                })
            },
            {
                test: /\.js?/,
                include: APP_DIR,
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'es2015', 'es2016', 'react'],
                    plugins: ['transform-regenerator']
                }
            }
        ]
    },
    plugins: [
        extractSass
    ]
};

module.exports = config;
