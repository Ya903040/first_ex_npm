const moment = require('moment');
const unique = require('uniq');

const myDate = new Date;
const myCoolDate = moment(myDate).format('LLLL');

const myList = [1, 1, 2, 3, 4, 4, 5, 6, 7, 7, 8, 9];
const myUniqList = unique(myList);

console.log(myUniqList)
console.log(myCoolDate)

document.write("uniq of (1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 7, 8, 8, 9, 9) is: " + myUniqList)
document.write("<br>")
document.write("current date: " + myCoolDate)