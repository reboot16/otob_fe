module.exports = {
    pwa: {
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            swSrc: 'src/service-worker.js',
        }
    },
    devServer: {
        proxy: 'http://localhost:9000'
    }
}
