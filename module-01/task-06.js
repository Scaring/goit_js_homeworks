'use strict';

let input = prompt('Введите число!');
let total = 0;

while (input !== null) {
  total += Number(input);
  input = prompt('Введите еще одно число!');
}

if (total === 0) {
  alert('Чисел не введено!');
} else {
  alert(`Общая сумма чисел равна ${total}`);
}
