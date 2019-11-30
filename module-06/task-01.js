'use strict';
import users from './users.js';
// Получить массив имен всех пользователей (поле name).

const getUserNames = users => {
  //Варіант-1
  //   const userNamesList = [];
  //   users.forEach(user => userNamesList.push(user.name));
  //   return userNamesList;

  //Варіант-2
  return users.reduce((userNamesList, user) => {
    userNamesList.push(user.name);
    return userNamesList;
  }, []);
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
