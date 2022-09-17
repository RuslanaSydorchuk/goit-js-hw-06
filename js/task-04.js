const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIincrement = document.querySelector('button[data-action="increment"]');
let valueEl = document.querySelector('#value');
let counterValue = 0;

btnDecrement.addEventListener('click', onbtnDecrementClick); 
btnIincrement.addEventListener('click', onbtnIincrementClick);

function onbtnDecrementClick() {
    counterValue -= 1;
    valueEl.textContent = counterValue;
    console.log(counterValue);
}

function onbtnIincrementClick() {
    counterValue += 1;
    valueEl.textContent = counterValue;
    console.log(counterValue);
}

