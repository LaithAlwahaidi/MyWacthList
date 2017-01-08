var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: path.join(__dirname, "/src"),
    entry: "./js/client.js",
    devtool: 'eval-source-map',
    module: {
        loaders: [
        {
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015'],
                plugins: ['react-html-attrs']
            }
        }
        ]
    },
    output: {
        path: path.join(__dirname, "/src/"),
        filename: "client.bundle.js"
    }
};
