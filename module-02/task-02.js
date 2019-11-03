'use strict';

// Напиши скрипт подсчета стоимости гравировки украшений. Для этого создай функцию
// calculateEngravingPrice(message, pricePerWord) принимающую строку (в строке будут только слова
// и пробелы) и цену гравировки одного слова, и возвращающую цену гравировки.

// 1. розбити рядок на масив
// 2. підрахувати кількість елементів масиву
// 3. помножити кількість елементів масиву на ціну за слово (pricePerWord)

let message;
let pricePerWord;

const calculateEngravingPrice = function(message, pricePerWord) {
  let massageArray = message.split(' ');
  let massageArrayCount = massageArray.length;
  let result = massageArrayCount * pricePerWord;
  return result;
};

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
); // 80

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
); // 160

console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 40)); // 200

console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 20)); // 100
