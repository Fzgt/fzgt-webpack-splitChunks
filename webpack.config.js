const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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
            cacheGroups: {
                // commons: {
                //     chunks: 'all',
                //     name: 'chunk-commons',
                //     minChunks: 2,
                //     requestExistingChunk: true,
                // }
            },
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

    plugins: [
        new BundleAnalyzerPlugin()
    ]
}; 