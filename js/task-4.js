"use strict";

import users from "../js/users.js";

const getInactiveUsers = users => {
  return users.filter(someUser => !someUser.isActive);
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
