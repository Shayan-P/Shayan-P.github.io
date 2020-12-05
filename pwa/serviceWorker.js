const statics = "coffeStatic"
const assets = [
    "/",
    "/index.html",
    "/style.css",
    "/app.js",
    //    "/coffee1.jpeg",
    "/coffee2.jpeg",
    "/coffee3.jpeg",
    "/coffee4.jpeg",
    "/coffee5.jpeg",
]
version = "v1 "

self.addEventListener("install", installEvent => {
    console.log("installing...")
    installEvent.waitUntil(
        caches.open(version + "init").then(cache => {
            cache.addAll(assets)
        }).then(res => { console.log("sucess!") })
    )
});

self.addEventListener('fetch', function(event) {
    console.log("fetching...", event.request.url);
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            console.log("matched!");
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

                    //                    caches.open(version + "net")
                    //                        .then(function(cache) {
                    //                            cache.put(event.request, responseToCache);
                    //                        });

                    return response;
                }
            ).catch(res => response);
        })
    );
});