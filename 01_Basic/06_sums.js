const num1 = new Number(4545.88887) // see all methods of number and string in console
// console.log(num1);

// console.log(num1.toString().length); //after converting to string, we can now apply string methods to it like length.
// console.log(num1.toFixed(1)); //most commonly used, number after decimal is 1

// // console.log(num1.toPrecision(3)); //not valueable here , must know values before digit.
// console.log(num1.toPrecision(5));

let num2 = 100000000
// console.log(num2.toLocaleString()); //US standard
// console.log(num2.toLocaleString('en-IN'));

// ++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++

// console.log(Math); // see math methods on console
// console.log(Math.abs(-45)); //abs means absolute

// console.log(Math.round(4.2));  //gives round off value
// console.log(Math.ceil(4.2));  //gives 5 if greater than 4

// console.log(Math.floor(4.6));  //give 4 even if greater than 5 after the decimal

// console.log(Math.max(3,6,7,4,9)); //min is also same 

console.log(Math.random()); // give random value between 0 and 1 , it is mostly decimal.

console.log(Math.floor((Math.random()*10)+1)); //give value b/w 1 and 9
// by * 10 , the value becomes greater than 1, but if number 0.005557 then for that +1

let min= 10
let max = 30

console.log(Math.floor((Math.random()*(max-min+1)+ min)))
// .floor gives lowest digit value, 


