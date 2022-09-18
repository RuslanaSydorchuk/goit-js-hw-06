const size = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
size.value = 16
size.addEventListener('input', (evt) => {
    text.style.fontSize = size.value + 'px'
})
