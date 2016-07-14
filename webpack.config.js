var webpack = require('webpack');

module.exports = {
    entry: {
        'demo-1': ['./demo/demo-1/app.jsx'],
    },
    output: {
        path: './dist',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/],
                loaders: ['babel-loader']
            }
        ]
    },
    devtool: 'source-map'
};