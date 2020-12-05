if ("serviceWorker" in navigator) {
    console.log("INSTALL")
    window.addEventListener("load", function() {
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then(console.log)
            .catch(err => console.log("service worker not registered", err))
    })
}
