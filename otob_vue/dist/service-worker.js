importScripts("/precache-manifest.48fe20a8e894789bc02d7b8fb396127b.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

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
      new workbox.strategies.NetworkOnly({
          plugins: [
              new workbox.backgroundSync.Plugin(
              'queued-product-request',
              {
                maxRetentionTime: 24 * 60
              })
          ]
      }),
      'POST'
    )
    
    workbox.routing.registerRoute(
        new RegExp('^http://localhost:9000/api/products'),
        new workbox.strategies.NetworkFirst({
            cacheName: 'blizaar-response-cache',
            plugins: [
                new workbox.cacheableResponse.Plugin({
                    statuses: [200]
                }),
                new workbox.expiration.Plugin({
                    maxEntries: 50,
                    maxAgeSeconds: 7 * 24 * 60 * 60
                })
            ]
        }),
        'GET'
    )
    
    workbox.routing.registerRoute(
      new RegExp('^http://localhost:9000/api/orders/user'),
      new workbox.strategies.NetworkFirst({
          cacheName: 'blizaar-response-cache',
          plugins: [
              new workbox.cacheableResponse.Plugin({
                  statuses: [200]
              }),
              new workbox.expiration.Plugin({
                  maxEntries: 50,
                  maxAgeSeconds: 7 * 24 * 60 * 60
              })
          ]
      }),
      'GET'
    )
    
} else {
    console.log('workbox not loadded')
}

