document.addEventListener("DOMContentLoaded", () => {
    const shortcuts = document.getElementsByClassName("shortcut-button")

    Array.from(shortcuts)
        .forEach(
            element => {
                element.addEventListener('click', launch_app)
            }
        )
    function launch_app(e) {
        const request = new XMLHttpRequest()
        request.open("GET", `/launch_app("${e.target.innerText}")`, true)
        request.send()
    }
})
