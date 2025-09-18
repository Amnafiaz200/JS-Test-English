const id = Symbol(123)
const id2 = Symbol(123)
// console.log(id === id2) //false, symbol is unique
//symbol is used to create unique identifiers for object properties

let id3= Symbol.for(123) //global symbol
let id4= Symbol.for(123)
// console.log(id3===id4) //true, global symbol

let myobject= {
    [id]: 'amna',
    [id2]: 'fiaz',
}
// console.log(myobject) //symbol properties are not enumerable, they do not appear in for...in or Object.keys() iteration

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//memory stack vs memory heap
//primitive types are stored in memory stack, they are fast to access
//reference types are stored in memory heap, they are slower to access

// //stack
// // let myName = 'Amna'
// // let MyLastName = myName

MyLastName = 'Fiaz'
// // console.log(myName)
// // console.log(MyLastName) // we gwt new copy of myName

// //heap
let user1={
    name :"Amna",
    rollNo :234
}
let user1 = user2   // error
let user2 = user1

let user2.rollNo = 555   // error, user2 already declared 
user2.rollNo = 555
// console.log(user1)   // both will get rollNo = 555
// console.log(user2)

//+++++++++++++++++++++++++++ strings +++++++++++++++++++++++++++=

// const name = "amna"
// let rollNo = 20

// console.log(name +  rollNo) // old way of concatenation of strings
// console.log(`my name is ${name} and my roll no is ${rollNo}`)  //there is string interpolation, better way
// // `` this is backticks

//const gamename = new string('hello')  // error

const gamename = new String('hello') // another way to declare variable
console.log(gamename[1])
console.log(gamename.__proto__);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('l'));

// const string1 = gamename.substring(0, 3) // 3 is exclusive
// console.log(string1);

// const string2 = gamename.slice(0, -3) // -3 is exclusive, slice can take negative index
// console.log(string2);

const string3 = '   Amna   '
const string4 = string3.trim // mistake is trim is function so write it like trim()
// console.log(string3);
// console.log(string3.trim());

const name = 'hello how are you'
// console.log(name.replace(' ','-' )); 
// console.log(name.replaceAll(' ','-' )); 
// console.log(name.includes('how')) // true

// console.log(name.split(''));
// console.log(name.split(' '));




























