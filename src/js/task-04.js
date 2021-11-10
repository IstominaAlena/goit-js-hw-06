// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй
// её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const refs = {
  counterValue: document.querySelector('#value'),
  decrementBtn: document.querySelector('button[data-action="decrement"]'),
  incrementBtn: document.querySelector('button[data-action="increment"]'),
};

let numberValue = Number(refs.counterValue.textContent);

function onClickIncrement() {
  numberValue += 1;
  refs.counterValue.textContent = numberValue;
}

function onClickDecrement() {
  numberValue -= 1;
  refs.counterValue.textContent = numberValue;
}

refs.incrementBtn.addEventListener('click', onClickIncrement);
refs.decrementBtn.addEventListener('click', onClickDecrement);
