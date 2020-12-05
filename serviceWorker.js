const statics = "statics"
const assets = [
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
                    var responseToCache = response.clone();

                    caches.open(version + "net")
                    .then(function(cache) {
                          cache.put(event.request, responseToCache);
                    });
                    return response;
                }
            ).catch(res => response);
        })
    );
});
