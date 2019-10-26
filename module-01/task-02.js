'use strict';

const total = 100;
const ordered = 50;

const negativeMessage = 'На складе недостаточно твоаров!';
const positiveMessage = 'Заказ оформлен, с вами свяжется менеджер';

if (ordered > total) {
  console.log(negativeMessage);
} else {
  console.log(positiveMessage);
}
