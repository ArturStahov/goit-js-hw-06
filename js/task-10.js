"use strict";

import users from "../js/users.js";

const getSortedUniqueSkills = users => {
  const sortArray = [...users]
    .reduce((acc, someUser) => {
      acc.push(...someUser.skills);
      return acc;
    }, [])
    .sort()
    .filter(
      (someSkillName, index, arr) => arr.indexOf(someSkillName) === index
    );
  return sortArray;
};

// фйильтрация на уникальность значений в массиве с помощю indexOf и filter ,Set, reduce https://webformyself.com/kak-proizvesti-udalenie-dublej-massiva-v-es6/ перевод
//https://medium.com/dailyjs/how-to-remove-array-duplicates-in-es6-5daa8789641c  источник
console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
