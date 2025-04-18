const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/client/app/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'docs'),
        clean: true,
        publicPath: '/', // Required for dev server
    },
    module: {
        rules: [
            {
                test: /\.ejs$/,
                use: ['ejs-compiled-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),
    ],
    resolve: {
        extensions: ['.js']
    },
};
