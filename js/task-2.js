"use strict";

import users from "../js/users.js";
const getUsersWithEyeColor = (users, color) => {
  return users.filter(someUser => {
    if (color === someUser.eyeColor) {
      return someUser;
    }
  });
};

console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
