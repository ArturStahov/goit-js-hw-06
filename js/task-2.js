"use strict";

import users from "../js/users.js";
const getUsersWithEyeColor = (users, color) => {
  return users.filter(someUser => color === someUser.eyeColor);
};

console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
