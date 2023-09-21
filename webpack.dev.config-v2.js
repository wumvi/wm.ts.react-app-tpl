const jsonCommon = require('./webpack.common.config-v2');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const fs = require('fs');
let packageRaw = fs.readFileSync('package.json');
let packageJson = JSON.parse(packageRaw);

const config = {
    ...jsonCommon('development'),
    entry: {
        'index': './dev/index.tsx',
    },
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        port: process.env.PORT ?? 8229,
        host: process.env.HOST ?? '0.0.0.0',
        static: {
            directory: path.join(__dirname, 'dev'),
        },
    },
};

config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
});

config.plugins.push(
    new HtmlWebpackPlugin({
        title: packageJson['name'] + ':' + packageJson['version'],
        template: 'dev/index.html',
        filename: './index.html',
        chunks: ['index'],
        hash: true,
    }),
);

module.exports = config;