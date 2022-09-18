const size = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
size.value = 16
size.addEventListener('input', (evt) => {
    text.style.fontSize = size.value + 'px'
})


// const range = document.querySelector('#font-size-control')
// const text = document.querySelector('#text')
// range.value = 16
// range.addEventListener('input', (event) => {
//     text.style.fontSize = range.value + 'px'
// })