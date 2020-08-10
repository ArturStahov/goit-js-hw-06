"use strict";

import users from "../js/users.js";

const getUsersWithAge = (users, min, max) => {
  return users.filter(someUser => someUser.age > min && someUser.age < max);
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
