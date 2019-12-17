'use strict';

// const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// // // arr.forEach(index => console.log(index));

// // const odd = arr.filter(item => item % 2 === 0);
// // console.log(odd);

// // const even = arr.filter(item => item % 2 !== 0);
// // console.log(even);

// // const arr = [1, 3, 4, 6, 7, 3, 3, 4, 5, 7];

// // const unic = arr.filter((item, index, array) => {
// //   return index === array.indexOf(item);
// // });

// // console.log(unic);

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// const tags = getTags(tweets);

// // Вынесем callback-функцию отдельно, а в reducе передадим ссылку на нее.
// // Это стандартная практика если callback-функция довольно большая.

// // Если в объекте-аккумуляторе acc нету своего свойства с ключем tag,
// // то создаем его и записывает ему значение 0.
// // В противном случае увеличиваем значение на 1.
// console.log(tags);

// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//     // console.log(acc);

//     // console.log(`no-prop: go next`);
//   }

//   acc[tag] += 1;

//   //   console.log(acc);
//   // console.log(`has-prop: plus`);

//   return acc;
// };

// // Начальное значение аккумулятора это пустой объект {}
// const countTags = tags => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// console.log(tagCount);

// // const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// // /*
// //  * Фильтруем четные числа. Далее, на результате метода filter,
// //  * вызываем map и множим на 2. После чего на результате
// //  * метода map вызываем reverse.
// //  */

// // const result = numbers
// //   .filter(x => x % 2 === 0)
// //   .map(y => y * 2)
// //   .reverse();

// // console.log(result);

// function max(arr) {
//   const result = [];
//   result.push(Math.max(...arr));
//   return result;
// }

// console.log(max(myArr));

