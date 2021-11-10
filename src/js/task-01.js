// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов
// li.item. Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль
// текст заголовка элемента(тега < h2 >) и количество элементов в категории(всех вложенных в него < li >).

const categoriesEl = document.querySelector('#categories');
const itemsArray = categoriesEl.querySelectorAll('#categories > li');

console.log(`Number of categories:`, itemsArray.length);

itemsArray.forEach(item => {
  const titleEl = item.firstElementChild;
  console.log(`Category:`, titleEl.textContent);

  const itemListEl = item.lastElementChild;
  const itemListAmountEl = itemListEl.children;
  console.log(`Elements:`, itemListAmountEl.length);
});
