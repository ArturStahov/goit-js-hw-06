"use strict";

import users from "../js/users.js";

// Получить общую сумму баланса(поле balance) всех пользователей.

const calculateTotalBalance = users =>
  users.reduce((total, user) => total + user.balance, 0);

console.log(calculateTotalBalance(users)); // 20916
