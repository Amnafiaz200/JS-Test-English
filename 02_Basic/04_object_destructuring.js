//object destructuring for Cleaner and shorter code.
obj2 = {a: '1', b: 'Amna', c: '3', d: '20'};

let {a, b} = obj2; // extracts the values of a and b from obj2 and assigns them to variables a and b
// console.log(a); // prints the value of a // no need to write obj2.a
// console.log(b); // prints the value of b

let {a :numbers, b: name} = obj2;  //give new names to variables called aliasing or destructuring with renaming
// console.log(numbers); // prints the value of a
// console.log(name); // prints the value of b

//values come in JOSN in api

// {                      // it is JSON format not object bz keys are in quotes and no functions. object has always name, key without quotes, and can have functions as value
//    'name': 'Amna',     // numbers and boolean are without quotes
//    'age': 20,
//    'city': 'LHR' ;

// }

// use fetch method to get data from api, covert json data into object and use destructuring to get values

// fetch('https://api.github.com/users/hiteshchoudhary')  
//     .then(response => response.json())          // convert json data into object


// we can get data in form of array of objects
// let users = [                         // JSON array of objects {}
//     {},
//     {}
// ];

//https://randomuser.me/ common api for random user data









