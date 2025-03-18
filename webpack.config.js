module.exports = {
    // entry: {
    //     main: './src/index.js',
    //     app: './src/app.js'
    // },

    optimization: {
        runtimeChunk: {
            name: 'runtime'
        },
        splitChunks: {
            chunks: 'all',
            cacheGroups: {},
            // minSize: {
            //     javascript: 30000,
            //     style: 0
            // },
            // maxSize: {
            //     javascript: 0,
            //     style: 0
            // }
        },
    },
}; 