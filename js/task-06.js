const input = document.querySelector('#validation-input');
input.addEventListener("blur", noFocus);
function noFocus(evt) {
    const length = Number(evt.currentTarget.dataset.length);
    if (evt.currentTarget.value.trim().length === length) {
        evt.currentTarget.classList.remove('invalid')
        evt.currentTarget.classList.add('valid')
    } else {
        evt.currentTarget.classList.remove('valid')
        evt.currentTarget.classList.add('invalid')
    }
}