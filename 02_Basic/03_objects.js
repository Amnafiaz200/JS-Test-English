//object can be singleton or can be created using constructor function
//object.create (using constructor function, )

//singleton object //Singleton → only one instance of the object is created, and reused
let obj1 = new Object()      
// console.log(obj1); // prints the empty object {}

//non-singleton object //Non-Singleton → every call creates a new independent object.
let obj2 = {} 
// console.log(obj2); // prints the empty object {}

//merge objects
let obj3 = {a: '1', b: 'Amna'};
let obj4 = {c: '3', d: '20'};
// let mergedObj = Object.assign({}, obj3, obj4); // {} is optional,but good practice, {} is the target object, if not provided obj3 will be modified,  obj3, obj4 are source objects
// console.log(mergedObj); // prints the merged object { a: '1', b: 'Amna', c: '3', d: '20' }
// console.log(obj3); // prints the original object { a: '1', b: 'Amna' } (obj3 is not modified)


let mergedObj = Object.assign(obj3, obj4); 
// console.log(mergedObj); 
// console.log(obj3); // obj3 is modified because target object is obj3, { a: '1', b: 'Amna', c: '3', d: '20' }

//spread operator used for merging, creates a shallow copy of obj3 and obj4, does not modify obj3 and obj4
let mergedObj2 = {...obj3, ...obj4};  //mostly used
// console.log(mergedObj2); // prints the merged object { a: '1', b: 'Amna', c: '3', d: '20' }
// console.log(obj3); // prints the original object { a: '1', b: 'Amna' } (obj3 is not modified)
// console.log(obj4); // prints the original object { c: '3', d: '20' } (obj4 is not modified)

//if both objects have same key, the value of the last object will be used
// let obj5 = {a: '1', b: 'Amna'};
// let obj6 = {b: 'Fiaz', d: '20'};
// let mergedObj3 = {...obj5, ...obj6};  
// console.log(mergedObj3); // { a: '1', b: 'Fiaz', d: '20' }


//when values are from database or api , its in form of arrays and there various objects in an array
let users = [                         // [] aaray of objects {}
    {
        userId: 1, 
        userName: 'Amna'
    },
    {userId: 2, userName: 'sana'},
    {userId: 3, userName: 'Ali'},
];

// console.log(users); // prints the array of objects
// console.log(users[1].userName); // prints the userName of the second object in the array, sana

// console.log(Object.keys(mergedObj)); // prints the array of keys of object
// console.log(Object.values(mergedObj));// prints the values of object 
// console.log(Object.entries(mergedObj)); // prints the array of key-value pairs of object, each key-value pair is an array

//check the property(key) in object
// console.log(mergedObj.hasOwnProperty('a')); // true
// console.log(mergedObj.hasOwnProperty('z')); // false

//loop through object
for (let key in mergedObj) {       // for...in loop to iterate over the keys of the object
    // console.log(`Key: ${key}, Value: ${mergedObj[key]}`); // prints the key and value of each key-value pair in the object
}

//object methods
// Object.keys() , Object.values(), Object.entries() are static methods, called on the Object class itself, not on an instance of the object

console.log(user.keys()); // wrong, TypeError: user.keys is not a function
console.log(Object.keys(user)); //works  bz its static method

// Object.freeze() is used to freeze an object, makes it immutable, cannot add, delete or modify properties
//once object is frozen, it cannot be unfrozen

// Object.seal() is used to seal an object, cannot add or delete properties, but can modify existing properties
Object.seal(mergedObj); // seals the object, makes it non-extensible, cannot add or delete properties


mergedObj.a = '10'; // can change the value of existing key
mergedObj.e = 'newValue'; // cannot add new key-value pair
delete mergedObj.b; // cannot delete key-value pair

// console.log(mergedObj); // prints the whole object, a is changed to 10, newKey is not added, b is not deleted












