//singleton
//object.create (using constructor function, )

let mysymbol = Symbol('key1');  //symbol is a unique and immutable data type, used as key in object
// [] notation to access the vlaue of symbol in object

//object literal //Singleton using object literal
let obj1 = {                 // {} object
    name: 'Amna',   // key: value pairs
    age: 20,
    mysymbol: 'myvalue', //symbol as key not good practice ,(type of key is string)
    [mysymbol]: 'myvalue', //symbol as key good practice, must be in [], type of key is symbol
    'login Days': [1, 2, 3, 4, 5], //array as value  // key with space must be in quotes
    isLoggedIn: true,            //boolean as value
    address: {                   // nested object as value, object inside object
        city: 'LHR',
        country: 'Pakistan'},
    greet: function() {                      //function can create as variable,function as value, method: function inside object
        console.log(`Hello ${this.name}`);   // this refers to the current object
    }
};

console.log(obj1.greet); // prints the function definition
console.log(obj1.greet()); // prints the function definition
// console.log(obj1); // prints the whole object
// console.log(obj1.name); // prints the value of name key  //Amna
// console.log(obj1['name']); // another way to access the value of age key  // Amna 
 // the later way is useful when the key is with a space.// '' is must

// console.log(obj1.login Days); // syntax error because of space in key
// console.log(obj1['login Days']); // prints the value of 'login Days' key  // [ 1, 2, 3, 4, 5 ]


// console.log(obj1[mysymbol]); // prints the value of symbol key  // myvalue
// obj1.greet(); // calls the greet method, prints "Hello Amna"
 
//changing the value of a key
obj1.age = 21; // changes the value of age key to 21

// Object.freeze(obj1); // freezes the object, makes it immutable, cannot add, delete or modify properties

obj1.age = 22; // cannot change the value of age key
obj1.address.city = 'ISB'; // (can change the value of nested object key)

obj1.newKey = 'newValue'; // cannot add new key-value pair
delete obj1.isLoggedIn; // cannot delete key-value pair

// console.log(obj1); // prints the whole object, age is still 21, newKey is not added, isLoggedIn is not deleted, city is changed to ISB











