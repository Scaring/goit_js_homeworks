'use strict';

let credits = 235800;
const pricePerDroid = 3000;
let totalPrice;

const countBuyDroid = prompt('How many droids do you want to buy?');

if (countBuyDroid === null) {
  console.log('Отменено пользователем!');
} else {
  totalPrice = Number(countBuyDroid) * pricePerDroid;

  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
  } else {
    credits -= totalPrice;
    console.log(
      `Вы купили ${countBuyDroid} дроидов, на счету осталось ${credits} кредитов.`,
    );
  }
}
