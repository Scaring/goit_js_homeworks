'use strict';

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li
// за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const insertLi = function insertLi(arr) {
  const ingredientsUl = document.querySelector('#ingredients');
  const allNodes = [];

  arr.forEach(element => {
    const liElem = document.createElement('li');
    liElem.textContent = `${element}`;
    allNodes.push(liElem);
  });

  ingredientsUl.append(...allNodes);
};

insertLi(ingredients);
