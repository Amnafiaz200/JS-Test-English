//loop through object
for (let key in mergedObj) {  // for...in loop to iterate over the keys of the object
    // console.log(`Key: ${key}, Value: ${mergedObj[key]}`); // prints the key and value of each key-value pair in the object
}

//object methods
// Object.keys() , Object.values(), Object.entries() are static methods, called on the Object class itself, not on an instance of the object

//Object.freeze() is used to freeze an object, makes it immutable, cannot add, delete or modify properties
// Object.seal() is used to seal an object, cannot add or delete properties, but can modify existing properties

//JSON (JavaScript Object Notation) is a lightweight data interchange format, used to exchange data between server and client, or between different parts of an application
let jsonString = JSON.stringify(mergedObj); // converts a JavaScript object to a JSON string
// console.log(jsonString);
let jsonObj = JSON.parse(jsonString); // converts a JSON string to a JavaScript object
// console.log(jsonObj);

//object destructuring
let {a, b} = mergedObj; // extracts the values of a and b from mergedObj and assigns them to variables a and b
// console.log(a); // prints the value of a
// console.log(b); // prints the value of b

//nested object destructuring
let nestedObj = {
    name: 'Amna',
    address: {
        city: 'LHR',
        country: 'Pakistan'
    }
};
let {address: {city, country}} = nestedObj; // extracts the values of city and country from nestedObj.address and assigns them to variables city and country
// console.log(city); // prints the value of city
// console.log(country); // prints the value of country

//function parameter destructuring
function printUser({userId, userName}) { // destructures the userId and userName from the parameter object
    // console.log(`User ID: ${userId}, User Name: ${userName}`); // prints the userId and userName
}
printUser(users[0]); // calls the function with the first object in the users array
printUser(users[1]); // calls the function with the second object in the users array
printUser(users[2]); // calls the function with the third object in the users array

//optional chaining (?.) is used to access nested properties of an object, if the property does not exist, it returns undefined instead of throwing an error
// console.log(nestedObj.address?.city); // prints the value of city
// console.log(nestedObj.address?.zipCode); // prints undefined, zipCode does not exist

//nullish coalescing operator (??) is used to provide a default value if the value is null or undefined
let userAge = null;
// let age = userAge ?? 18; // if userAge is null or undefined, age will be 18
let age = userAge || 18; // if userAge is falsy (null, undefined, 0, '', false), age will be 18
// console.log(age); // prints 18

//optional chaining with function calls
let user = {
    name: 'Amna',
    greet: function() {
        // console.log(`Hello, ${this.name}`);
    }
};
user.greet?.(); // calls the greet method if it exists, otherwise does nothing
let user2 = {
    name: 'Sana'
};
user2.greet?.(); // does nothing, greet method does not exist
