// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя свойство font - size.В результате при перетаскивании
// ползунка будет меняться размер текста.

const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
const minFsize = inputEl.getAttribute('min');
const maxFsize = inputEl.getAttribute('max');
inputEl.setAttribute('step', '10');

function handleFsize(event) {
  let targetValueEl = event.target.value;
  textEl.style.fontSize = `${targetValueEl}px`;
}

inputEl.addEventListener('input', handleFsize);
