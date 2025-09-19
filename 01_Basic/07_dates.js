// date is an object in js
let mydate = new Date();
// console.log(mydate);
// console.log(typeof mydate); //   typeof date is object
// console.log(mydate.toString()); // converts date object to string
// console.log(mydate.toDateString()); // converts date object to date string
// console.log(mydate.toISOString()); // converts date object to ISO string , ISO standard format
// console.log(mydate.toUTCString()); // converts date object to UTC string , UTC standard format
// console.log(mydate.toLocaleString()); // 9/19/2025, 5:45:01 AM, converts date object to locale string
// console.log(mydate.toLocaleDateString()); // 9/19/2025, converts date object to locale date string
// console.log(mydate.toLocaleTimeString()); // 5:45:01 AM, converts date object to locale time string

// how to create a date
let d = new Date(2020,0,10,5,4,2);  // array, month is 0-indexed (0-11) so 0 is January
// console.log(d);
let d2 = new Date('2020-02-10'); // YY-MM-DD, month is 1-indexed (1-12) so 2 is February
let timeStamp = Date.parse('2020-02-10'); // returns time in milliseconds from 1970-01-01 to 2020-02-10
// console.log(d2);
// console.log(timeStamp);

let timeStamp2 = Date.now(); // return current timestamp, there is no argument needed, returns current time in milliseconds from 1970-01-01 to now
// console.log(timeStamp2);

// how to get date and time
// console.log(d.getTime()); // return current timestamp but on specific date, work on date object like d time in milliseconds from 1970-01-01 to 2020-01-10
// console.log(d.getFullYear()); //2020
// console.log(d.getMonth()); // month 0-11 (0 is January, 1 is February, ...)
// console.log(d.getDay()); // day of the week 0-6 (0 is Sunday, 1 is Monday, ...)
// console.log(d.getDate()); // date of the month 1-31
// console.log(d.getMinutes());
// console.log(d.getHours());
// console.log(d.getSeconds());

//date from milliseconds to seconds (important)
// console.log(Math.floor(d.getTime()/1000)); // convert milliseconds to seconds

//for further customization of toLocaleString() method
// make object of options
let options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
// console.log(d.toLocaleString('en-US', options)); // Saturday, January 10, 2020
// console.log(d.toLocaleString('ur-Pk', options)); // Saturday, January 10, 2020

// // how to set a date
d.setFullYear(2021);  //2020 to 2021
// console.log(d);

d.setMonth(5); // 0 to 5 (June)
// console.log(d);

d.setDate(27); // 10 to 27
// console.log(d);


// Date.UTC() - accepts the same parameters as the longest form of the constructor, and returns the number of milliseconds in a Date object since January 1, 1970, 00:00:00, universal time.
let utc = Date.UTC(2023, 5, 1); // month is 0-indexed
// console.log(utc);

console.log(new Date(utc)); // five timestamp in milliseconds, convert it to date object

// there is a concept of heap. change in date object will change the reference in heap memory
console.log(d);
