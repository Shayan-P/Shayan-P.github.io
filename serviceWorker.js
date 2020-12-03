const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
    "/",
    "/index.html",
    "/style.css",
    "/app.js",
    "/coffee1.jpg",
    "/coffee2.jpg",
    "/coffee3.jpg",
    "/coffee4.jpg",
    "/coffee5.jpg",
]

self.addEventListener("install", installEvent => {
    console.log("SALAM")
    installEvent.waitUntil(
        caches.open(staticDevCoffee).then(cache => {
            cache.addAll(assets)
        })
    )
})

self.addEventListener('fetch', function(event) {

    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            // Cache hit - return response
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});

self.addEventListener('fetch', function(event) {
    console.log("FETCH", event)
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            // Cache hit - return response
            if (response) {
                return response;
            }

            return fetch(event.request).then(
                function(response) {
                    // Check if we received a valid response
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }

                    // IMPORTANT: Clone the response. A response is a stream
                    // and because we want the browser to consume the response
                    // as well as the cache consuming the response, we need
                    // to clone it so we have two streams.
                    var responseToCache = response.clone();

                    caches.open(CACHE_NAME)
                        .then(function(cache) {
                            cache.put(event.request, responseToCache);
                        });

                    return response;
                }
            );
        })
    );
});