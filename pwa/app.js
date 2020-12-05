const container = document.querySelector(".container")
const coffees = [
    { name: "Perspiciatis", image: "coffee1.jpeg" },
    { name: "Voluptatem", image: "coffee2.jpeg" },
    { name: "Explicabo", image: "coffee3.jpeg" },
    { name: "Rchitecto", image: "coffee4.jpeg" },
    { name: " Beatae", image: "coffee5.jpeg" },
]

const showCoffees = () => {
    let output = ""
    coffees.forEach(
        ({ name, image }) =>
        (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="coffee1.jpeg">Taste</a>
              </div>
              `)
    )
    container.innerHTML = output
}
document.addEventListener("DOMContentLoaded", showCoffees)
if ("serviceWorker" in navigator) {
    console.log("INSTALL")
    window.addEventListener("load", function() {
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then(res => console.log("service worker registered", res))
            .catch(err => console.log("service worker not registered", err))
    })
}