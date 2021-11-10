// Напиши скрипт создания и очистки коллекции элементов.Пользователь вводит количество элементов
// в input и нажимает кнопку Создать, после чего рендерится коллекция.При нажатии на кнопку Очистить,
// коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число.Функция создает столько
//   < div >, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.Используй готовую функцию
// getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные
// элементы.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('input[type="number"]'),
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
  element: document.querySelector('#boxes'),
};

function onElementsCreate() {
  const elementsArray = [];
  const elementsAmount = refs.input.value;
  let sizeValue = 30;
  for (let i = 0; i < elementsAmount; i += 1) {
    let elementNext = document.createElement('div');

    elementNext.style.border = '1px solid black';
    elementNext.style.width = `${sizeValue}px`;
    elementNext.style.height = `${sizeValue}px`;
    elementNext.style.marginBottom = `10px`;
    elementNext.style.backgroundColor = getRandomHexColor();

    elementsArray.push(elementNext);
    sizeValue += 10;
  }
  refs.element.append(...elementsArray);
}

refs.createBtn.addEventListener('click', onElementsCreate);

function onElementsDestroy() {
  refs.input.value = 0;
  const destroyElements = [...refs.element.children];
  for (let element of destroyElements) {
    element.remove();
  }
}

refs.destroyBtn.addEventListener('click', onElementsDestroy);
