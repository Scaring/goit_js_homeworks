'use strict';

// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку
// (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

// 1. розбити рядок на масив
// 2. зробити цикл перебору елементів масиву
// 3. вивести найдовше слово рядку/масиву

let string;

const findLongestWord = function(string) {
  let stringArr = string.split(' ');
  let stringArrCount = stringArr.length;
  let wordLength = stringArr[0].length;
  let longestWord = stringArr[0];

  for (let i = 1; i < stringArrCount; i++) {
    let newWord = stringArr[i];
    let newWordLength = stringArr[i].length;

    if (wordLength < newWordLength) {
      wordLength = newWordLength;
      longestWord = newWord;
    }
  }

  return longestWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
