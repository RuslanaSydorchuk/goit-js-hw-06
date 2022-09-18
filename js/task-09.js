function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector('.change-color');
const refColor = document.querySelector('.color');

btn.addEventListener('click', onBtn);

function onBtn(evt) {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  refColor.textContent = newColor;
}