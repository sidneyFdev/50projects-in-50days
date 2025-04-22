const background = document.querySelector('.background')
const percentage = document.querySelector('.percentage')

let loaded = 0
let int = setInterval(blurring, 30)

function blurring() {
    loaded ++

    if(loaded > 99) {
        clearInterval()
    }

    percentage.innerText= `${loaded}%`

    percentage.style.opacity = scale(loaded, 0, 100, 1, 0)
    background.style.filter = `blur(${scale(loaded, 0, 100, 30, 0)}px)`
}

const scale = (input, min, max, out_min, out_max) => {
    return ((input - min) * (out_max - out_min)) / (max - min) + out_min
}

