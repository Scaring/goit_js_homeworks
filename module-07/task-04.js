'use strict';

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let value = document.querySelector('#value');

let counterValue = Number(value.textContent);

const increment = function increment() {
  counterValue += 1;
  value.textContent = counterValue;
};

const decrement = function decrement() {
  counterValue -= 1;
  value.textContent = counterValue;
};

const incrBtn = document.querySelector('button[data-action="increment"]');
incrBtn.addEventListener('click', increment);

const decrBtn = document.querySelector('button[data-action="decrement"]');
decrBtn.addEventListener('click', decrement);
