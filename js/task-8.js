"use strict";

import users from "../js/users.js";

const getUsersWithFriend = (users, friendName) => {
  return users.reduce((acc, someUser) => {
    if (someUser.friends.includes(friendName)) {
      acc.push(someUser.name);
    }
    return acc;
  }, []);
};

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]
