const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    // entry: {
    //     main: './src/index.js',
    //     app: './src/app.js'
    // },
    performance: {
        maxAssetSize: 250000, // 最大资源大小250kb
        maxEntrypointSize: 250000, // 最大入口资源大小250kb
        hints: 'warning'
    },
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
                    minChunks: 2, // 当一个文件被引用两次以上，就会放到chunk-commons里
                    // requestExistingChunk: true,
                },
                vendors: {}
            },
            // minSize maxSize优先级太高，会导致cacheGroups失效
            // splitChunks难在单entry很难控制，多entry的时候配置更容易生效

            // minSize: { // 小于某个值就没必要拆包
            //     javascript: 30000,
            //     style: 0
            // },
            // maxSize: { // 超过某个值就要拆包
            //     javascript: 120000,
            //     style: 0
            // }
        },
    },

    plugins: [
        new BundleAnalyzerPlugin()
    ]
}; 