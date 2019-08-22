module.exports = {
    pwa: {
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            swSrc: 'src/service-worker.js',
        }
    },
    // devServer: {
        // proxy: {
        //     '/api/**': {
        //         target: 'http://localhost:9000',
        //         ws: true,
        //         changeOrigin: true
        //     }
        // }
    // }
}
