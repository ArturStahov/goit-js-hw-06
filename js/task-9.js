"use strict";

import users from "../js/users.js";

const getNamesSortedByFriendsCount = users => {
  const arraySort = [...users]
    .sort(
      (prevUser, nextUser) => prevUser.friends.length - nextUser.friends.length
    )
    .map(user => user.name);
  return arraySort;
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
