// Напиши скрипт, который изменяет цвета фона элемента < body > через инлайн стиль при клике на
// button.change - color и выводит значение цвета в span.color.
// Для генерации случайного цвета используй функцию getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  body: document.querySelector('body'),
  button: document.querySelector('.change-color'),
  color: document.querySelector('.color'),
};

function onChangeColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.color.textContent = getRandomHexColor();
}

refs.button.addEventListener('click', onChangeColor);
