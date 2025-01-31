document.addEventListener("DOMContentLoaded", () => {
    let isCapsLocked = false
    const letters = document.getElementsByClassName('letter')
    const keys = document.getElementsByClassName('key')
    const shiftables = document.getElementsByClassName('shift')

    Array.from(letters)
        .forEach(
            ele => ele.addEventListener('click', start_typing)
        )
    const caps_key = document.getElementById("caps")
    caps_key.addEventListener('click', caps_key_functon)

    function caps_key_functon(e) {
        let inc = 0
        if (isCapsLocked === false) {
            inc = -32
            e.target.querySelector('img').src="../static/images/caps_pressed.png"
            isCapsLocked = true
        } else {
            inc = 32
            e.target.querySelector('img').src="../static/images/caps_unpressed.png"
            isCapsLocked = false
        }
        Array.from(shiftables)
            .forEach(
                ele =>
                    {
                        console.log(ele.innerText)
                        ele.innerText = String.fromCharCode(ele.innerText.charCodeAt(0) + inc)

                    }
            )

    }

    function start_typing(event) {
        const request = new XMLHttpRequest()
        let url
        if (event.value === "enter") {
            url = "/type_enter"
        } else if (event.value === "backspace") {
            url = "/type_backspace"
        } else {
            url = `/type_letter(${event.value})`
        }
        request.open("GET", url, true)
        request.send()
    }
})

