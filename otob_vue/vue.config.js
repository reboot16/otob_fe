module.exports = {
    pwa: {
        // name: 'Blizaar',
        // manifestPath: 'public/manifest.json',

        //Workbox Plugin
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            swSrc: 'src/service-worker.js',
            // swDest: 'service-worker.js',
            // runtimeCaching: [
            //     {
            //         urlPattern: /\.(?:js|css)$/,
            //         handler: 'StaleWhileRevalidate',
            //         options: {
            //             cacheName: 'blizaar-app-shell'
            //         }
            //     },
            //     {
            //         urlPattern: new RegExp('^http://localhost:9000/api/products'),
            //         handler:  'NetworkFirst',
            //         options: {
            //             cacheName: 'blizaar-api-cache',
            //             cacheableResponse: {
            //                 statuses: [0, 200]
            //             }
            //         }
            //     }
            // ]
        }
    }
}
