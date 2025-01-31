document.addEventListener("DOMContentLoaded", () => {
    let isCapsLocked = false
    const letters = document.getElementsByClassName('letter')
    const keys = document.getElementsByClassName('key')
    const shiftables = document.getElementsByClassName('shift')
    const special_buttons = document.getElementsByClassName('special')

    Array.from(keys)
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

    function special_type(event) {
        const request = new XMLHttpRequest()
        let url = None
        //FINISH THIS
        switch (event.target.id) {
            
        }

    }

    function start_typing(event) {
        const request = new XMLHttpRequest()
        let url = `/type_letter(${event.value})`
        request.open("GET", url, true)
        request.send()
    }
})

