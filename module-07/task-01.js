'use strict';

// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента
// (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const categories = document.querySelector('#categories');
const categoriesList = categories.querySelectorAll('li.item');
const categoriesCount = categoriesList.length;

console.log(`В списке ${categoriesCount} категории.`);

const showInfo = function showInfo(arr) {
  const categoriesArr = [...arr];

  categoriesArr.forEach(elem => {
    const categorieName = elem.querySelector('h2').textContent;
    const categorieElems = elem.querySelectorAll('li').length;
    console.log(`Категория: ${categorieName}`);
    console.log(`Количество элементов: ${categorieElems}`);
  });
};

showInfo(categoriesList);
