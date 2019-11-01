'use strict';

// Напиши функцию checkForSpam(str), принимающую 1 параметр string - строку. Функция проверяет ее на содержание слов
// spam и sale. Если нашли зарещенное слово то функция возвращает true, если запрещенных слов нет функция возвращает false.
// Слова в строке могут быть в произвольном регистре.

// 1. записати рядок в масив
// 2. створити цикл перебору елементів масиву
// 3. задати умову успішного знаходження ключових слів в елементі масиву
// 4. вийти з циклу при успішному знаходженні повернути тру
//     в протилежному випадку після циклу повернути фолз

let str;
const forbidden1 = 'spam';
const forbidden2 = 'sale';

const checkForSpam = function(str) {
  let strArr = str.split(' ');
  //   console.log(strArr);
  let strArrCount = strArr.length;

  for (let i = 0; i < strArrCount; i++) {
    let checkingItem = strArr[i].toLowerCase();
    let checkWord =
      checkingItem.includes(forbidden1) || checkingItem.includes(forbidden2);

    if (checkWord) {
      console.log(`string includes 'spam' or 'sale'`);
      return true;
    }
  }

  console.log(`string does not includ 'spam' or 'sale'`);
  return false;
};

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
