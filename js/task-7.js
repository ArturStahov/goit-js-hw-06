"use strict";

import users from "../js/users.js";

const calculateTotalBalance = users =>
  users.reduce((total, user) => total + user.balance, 0);

console.log(calculateTotalBalance(users)); // 20916
