const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)


function checkBoxes() {
    const windowBottom = window.innerHeight / 5 * 4

    console.log(windowBottom)

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < windowBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
            console.log('Removed ' + boxTop)
        }
    })
}