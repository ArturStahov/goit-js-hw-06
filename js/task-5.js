"use strict";

import users from "../js/users.js";

// Получить пользоваля(не массив) по email(поле email, он уникальный).

const getUserWithEmail = (users, email) => {
  let findedUser;
  users.forEach(element => {
    if (element.email === email) {
      findedUser = element;
    }
  });
  return findedUser;
};

console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}
