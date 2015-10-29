'use strict';

var webpack = require('webpack'),
    CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin,
    _ = require('lodash');

module.exports = _.merge(require('./webpack.config.js'), {

    output: {
        publicPath: "/sjrc/assets/"
    },
    plugins: [
        new CommonsChunkPlugin({
            name: "react-components"
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                hoist_vars: true,
                unsafe: true
            }
        })
    ]
});