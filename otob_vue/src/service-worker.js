if(workbox) {
    console.log('workbox loaded')

    workbox.core.setLogLevel(workbox.core.LOG_LEVELS.debug)

    workbox.precaching.precacheAndRoute(self.__precacheManifest)

    workbox.routing.registerNavigationRoute('/index.html')

    workbox.routing.registerRoute(
        /\.(?:js|css)$/,
        new workbox.strategies.StaleWhileRevalidate({
            cacheName: 'blizaar-core-cache'
        })
    )

    workbox.routing.registerRoute(
        new RegExp('^http://localhost:9000/api/products'),
        new workbox.strategies.NetworkFirst({
            cacheName: 'blizaar-response-cache',
            plugins: [
                new workbox.cacheableResponse.Plugin({
                    statuses: [200]
                })
            ]
        })
    )

} else {
    console.log('workbox not loadded')
}
