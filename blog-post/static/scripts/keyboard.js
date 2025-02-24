document.addEventListener("DOMContentLoaded", () => {
    //#region Swapping
    const input_displays = document.getElementsByClassName('displays')
    const dropdown = document.getElementById('control-select')
    dropdown.addEventListener('change', display_input)
    document.getElementById('trackpad').style.display = 'none'

    function display_input() {
        Array.from(input_displays)
            .forEach(
                ele => {
                    if (ele.getAttribute('id') !== dropdown.value) {
                        ele.style.display = 'none'
                    } else {
                        ele.style.display = ele.classList[1]
                    }
                }
            )
    }
    //#endregion Swapping
    //#region Keyboard
    let isCapsLocked = false
    const letters = document.getElementsByClassName('letter')
    const keys = document.getElementsByClassName('key')
    const shiftables = document.getElementsByClassName('shift')
    const special_buttons = document.getElementsByClassName('special')
    const caps_key = document.getElementById("caps")
    const annoying_shiftables = document.getElementsByClassName("hardshift")

    Array.from(special_buttons)
        .forEach(
            ele => ele.addEventListener('click', special_type)
        )
    Array.from(keys)
        .forEach(
            ele => ele.addEventListener('click', start_typing)
        )
    caps_key.addEventListener('click', caps_key_functon)

    function caps_key_functon(e) {
        let inc = 0
        if (isCapsLocked === false) {
            inc = -32
            e.target.src="../static/images/caps_pressed.png"
            difficult_shifting()
            isCapsLocked = true
        } else {
            inc = 32
            e.target.src="../static/images/caps_unpressed.png"
            difficult_shifting()
            isCapsLocked = false
        }
        Array.from(shiftables)
            .forEach(
                ele => ele.innerText = String.fromCharCode(ele.innerText.charCodeAt(0) + inc)
            )

    }

    function difficult_shifting() {
        Array.from(annoying_shiftables)
            .forEach(
                element => {
                    let inc = 0
                    switch (element.id) {
                        case "1":
                        case "3":
                        case "4":
                        case "5":
                            inc = -16
                            break
                        case "2":
                            inc = 14
                            break
                        case "6":
                            inc = 40
                            break
                        case "7":
                        case "9":
                            inc = -17
                            break
                        case "8":
                            inc = -14
                            break
                        case "0":
                            inc = -7
                            break
                        case "-":
                            inc = 50
                            break
                        case "=":
                            inc = -18
                            break
                        case "[":
                        case "]":
                        case "\\":
                            inc = 32
                            break
                        case ";":
                            inc = -1
                            break
                        case "'":
                            inc = -5
                            break
                        case ",":
                        case ".":
                        case "/":
                            inc = 16
                            break
                    }
                    incro(element, inc)
                }
            )
    }

    function incro(element, x) {
        if (isCapsLocked === false) {
            element.innerText = String.fromCharCode(element.innerText.charCodeAt(0) + x)
        } else {
            element.innerText = String.fromCharCode(element.innerText.charCodeAt(0) - x)
        }
    }

    function special_type(event) {
        const request = new XMLHttpRequest()
        let url = `press_input("${event.target.id}")`
        request.open("GET", url, true)
        request.send()
    }

    function start_typing(event) {
        const request = new XMLHttpRequest()
        let vari = event.target.innerText
        let url = ""
        if (vari === "/") {
            url = '/type_slash("f")'
        } else if (vari === "\\"){
            url = '/type_slash("b")'
        } else if (vari === '"') {
            url = "/type_letter('\"')"
        } else if (vari === "?") {
            url = '/type_question_pound("q")'
        } else if (vari === "#") {
            url = '/type_question_pound("p")'
        } else {
           url = `/type_letter("${vari}")`
        }
        request.open("GET", url, true)
        request.send()
    }
    //#endregion Keyboard
    //#region Trackpad
    const mouse_movement_area = document.getElementById('mouse-area')
    const right_click_mouse = document.getElementById('right-click')
    const left_click_mouse = document.getElementById('left-click')
    const middle_click_mouse = document.getElementById('middle-click')
    const screen_width = document.getElementById('screen-width')
    const screen_height = document.getElementById('screen-height')

    right_click_mouse.addEventListener("click", click_ability)
    left_click_mouse.addEventListener("click", click_ability)
    middle_click_mouse.addEventListener("click", click_ability)
    mouse_movement_area.addEventListener("mousemove", move_mouse_to)

    function click_ability(e) {
        const request = new XMLHttpRequest()
        const input = e.target.getAttribute('id').split('-')[0]
        let url = `/click_mouse("${input}")`
        request.open("GET", url, true)
        request.send()
    }

    function move_mouse_to(e) {
        const bounds = e.target.getBoundingClientRect()
        const width_scaler = screen_width.value / e.target.clientWidth
        const height_scaler = screen_height.value / e.target.clientHeight
        const newXPos = (e.clientX - bounds.left) * width_scaler
        const newYPos = (e.clientY - bounds.top) * height_scaler
        const request = new XMLHttpRequest()
        const url = `/move_mouse_to(${newXPos}, ${newYPos})`
        request.open("GET", url, true)
        request.send()
    }
    //#endregion Trackpad
})

