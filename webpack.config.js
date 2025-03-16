const { runtime } = require("webpack");

module.exports = {
    entry: {
        main: './src/index.js',
        app: './src/app.js'
    },
    optimization: {
        runtimeChunk: {
            name: 'runtime'
        }
    }
}; 