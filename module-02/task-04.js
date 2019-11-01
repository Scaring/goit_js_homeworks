'use strict';

// Напиши функцию formatString(string) принимающую строку в параметр string.
// Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
// Если длина больше 40 символов, то функция обрезает строку до 40-ка символов и добавляет в конец строки
// троеточие '...', после чего возвращает укороченную версию.

// 1. рахуємо довжину символів у рядку
// 2. якщо рядок довший за максимально допустиме значення:
//     розбиваємо його на масив посимвольно -> відрізаємо масив необхідної довжини
//     видаляємо три останніх елемента масиву, вставляємо "..."
//     зшиваємо мосив і повертаємо обрізаний рядок
// 3. інакше повертаємо рядок

let string;

const formatString = function(string) {
  let stringCount = string.length;
  let maxString = 40;
  let conditionCheck = stringCount > maxString;

  if (conditionCheck) {
    let stringArr = string.split('');
    let cuttedArr = stringArr.slice(0, maxString);
    cuttedArr.splice(maxString - 3, 3, '...');
    let cuttedString = cuttedArr.join('');
    return cuttedString;
  } else {
    return string;
  }
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка
