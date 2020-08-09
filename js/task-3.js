"use strict";

import users from "../js/users.js";

const getUsersWithGender = (users, gender) => {
  const userNameArray = [];
  users.forEach(someUser => {
    if (someUser.gender === gender) {
      userNameArray.push(someUser.name);
    }
  });
  return userNameArray;
};

console.table(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
