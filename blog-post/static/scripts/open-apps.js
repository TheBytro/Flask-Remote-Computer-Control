document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('steam-button').addEventListener('click', steam)
    document.getElementById('borderlands-button').addEventListener('click', borderlands)
    document.getElementById('cs-button').addEventListener('click', cs)
    document.getElementById('gta-button').addEventListener('click', gta)
})

function steam() {
    let request = new XMLHttpRequest()
    request.open("GET", "/" + "open_steam()", true)
    request.send()
}

function borderlands() {
    let request = new XMLHttpRequest()
    request.open("GET", "/" + "open_borderlands()", true)
    request.send()
}

function cs() {
    let request = new XMLHttpRequest()
    request.open("GET", "/" + "open_cs()", true)
    request.send()
}

function gta() {
    let request = new XMLHttpRequest()
    request.open("GET", "/" + "open_gta()", true)
    request.send()
}