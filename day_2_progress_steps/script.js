const progress_bar = document.getElementById('progress_bar')
const next_btn = document.getElementById('next')
const prev_btn = document.getElementById('prev')
const icons = document.querySelectorAll('.step_icon')

let currentProgress = 1;


next_btn.addEventListener('click', () => {
    currentProgress++

    if(currentProgress > icons.length) {
        currentProgress = icons.length
    }
    
    updateProgress()
})

prev_btn.addEventListener('click', () => {
    currentProgress--

    if(currentProgress < 1) {
        currentProgress = 1
    }
    
    updateProgress()
})

function updateProgress() {

    icons.forEach((icon, index) => {
        if (index + 1 <= currentProgress) {
            icon.classList.add('active')
        } else {
            icon.classList.remove('active')
        }
    })

    let icons_active = document.querySelectorAll('.active')

    progress_bar.style.width = ((icons_active.length - 1 ) / (icons.length - 1)) *
    100 + '%'

    if (currentProgress == 1) {
        prev.disabled = true;
    } else if(currentProgress == icons.length) {
        next.disabled = true;
    } else {
        next.disabled = false;
        prev.disabled = false;
    }
}