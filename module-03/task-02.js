'use strict';

// Напиши функцию countProps(obj), считающую кол-во свойств в объекте. Функция возвращает число - количество свойств.

const countProps = function(obj) {
  let total = 0;
  const props = Object.keys(obj);
  total = props.length;
  return total;
};

console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(
  countProps({
    mail: 'poly@mail.com',
    isOnline: true,
    score: 500,
  }),
); // 3
