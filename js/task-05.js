const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', onBoard);

function onBoard(evt) {
    output.textContent = evt.currentTarget.value.trim();
    if (evt.currentTarget.value === '') {
        output.textContent = 'Anonymous'
    }
}
