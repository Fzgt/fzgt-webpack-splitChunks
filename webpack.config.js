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
            maxAsyncRequests: 1, // 最多拆分出几个异步chunk
            cacheGroups: {
                commons: {
                    chunks: 'all',
                    name: 'chunk-commons',
                    minChunks: 2,
                    // requestExistingChunk: true,
                }
            },
            // minSize: { // 小于某个值就没必要拆包
            //     javascript: 30000,
            //     style: 0
            // },
            // maxSize: { // 超过某个值就要拆包
            //     javascript: 0,
            //     style: 0
            // }
        },
    },

    plugins: [
        new BundleAnalyzerPlugin()
    ]
}; 