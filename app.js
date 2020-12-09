if ("serviceWorker" in navigator) {
    console.log("INSTALL")
    window.addEventListener("load", function() {
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then(console.log)
            .catch(err => console.log("service worker not registered", err))
    })
}

window.addEventListener('beforeinstallprompt', ()=>{
    console.log("I'm being installed2!")
});
window.addEventListener('appinstalled', (evt) => {
    // Log install to analytics
    console.log('INSTALL: Success2');
});
