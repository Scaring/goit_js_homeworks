'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
let passwordInput = prompt('Enter your password?');

if (passwordInput === null) {
  message = 'Отменено пользователем!';
} else if (passwordInput === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}

alert(message);
