"use strict";

import users from "../js/users.js";

const getSortedUniqueSkills = users => {
  const sortArray = [...users]
    .reduce((acc, someUser) => {
      acc.push(...someUser.skills);
      return acc;
    }, [])
    .sort();

  const unique = arr => {
    const uniqueArr = [];
    arr.forEach(element => {
      if (!uniqueArr.includes(element)) {
        uniqueArr.push(element);
      }
    });
    return uniqueArr;
  };
  return unique(sortArray);
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
