const labels = document.querySelectorAll('label')
const containers = document.querySelectorAll('.form-container')

labels.forEach(label => {
    label.innerHTML = label.innerHTML
        .split('')
        .map((letter, index)=> `<span style="transition-delay:${index *30}ms">${letter}</span>`)
        .join('')
})
