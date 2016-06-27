var webpack = require('webpack');

module.exports = {
    entry: {
        'demo-1': ['./demo/demo-1/hello-world.jsx'],
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
    }
};