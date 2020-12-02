const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
    "/",
    "index.html",
    "style.css",
    "app.js",
    "coffee1.jpg",
    "coffee2.jpg",
    "coffee3.jpg",
    "coffee4.jpg",
    "coffee5.jpg",
]

self.addEventListener("install", installEvent => {
    console.log("SALAM")
    installEvent.waitUntil(
        caches.open(staticDevCoffee).then(cache => {
            cache.addAll(assets)
        })
    )
})