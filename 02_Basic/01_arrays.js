//arrays in js create shallow copy like heap memory(share same reference)
let arr1 = [1, 2, 3, 4, 5];
let arr2 = arr1; //shallow copy, both arr1 and arr2 point to same array in heap memory
arr2.push(6); //push is used to add element at the end of array
// console.log(arr1); // [ 1, 2, 3, 4, 5, 6 ]
// console.log(arr2); // [ 1, 2, 3, 4, 5, 6 ]

// .pop is used to remove element from the end of array
arr2.pop();
// console.log(arr1); // [ 1, 2, 3, 4, 5 ]
// console.log(arr2); // [ 1, 2, 3, 4, 5 ]

//.unshift is used to add element at the beginning of array, usefull bz add load on computer
arr2.unshift(0);
// console.log(arr1);  

//.shift is used to remove element from the beginning of array
arr2.shift();
// console.log(arr1);

//.includes is used to check if an element is present in the array or not, returns boolean value
// console.log(arr1.includes(3)); //true
// console.log(arr1.includes(10)); //false

//.indexOf is used to find the index of an element in the array, returns -1 if element is not found
// console.log(arr1.indexOf(3));
// console.log(arr1.indexOf(10)); //-1 because the array does not contain 10

//.slice is used to extract a portion of the array, returns a new array 
let arr3 = arr1.slice(1, 4); //start index is inclusive, end index is exclusive
// console.log(arr3); // [ 2, 3, 4 ] //slice does not modify the original array
// console.log(arr1); // [ 1, 2, 3, 4, 5 ]

//.splice is used to remove elements from the array, modifies the original array
arr1.splice(2, 1); //start index is inclusive, number of elements to remove(1)
// console.log(arr1); // [ 1, 2, 4, 5 ] (3 is removed)

arr1.splice(2, 2); //start index is inclusive, number of elements to remove(1)
// console.log(arr1);  // [ 1, 2 ] (4 and 5 are removed)

// //. splice can also be used to add elements to the array
arr1.splice(2, 0, 3); //start index is inclusive, number of elements to remove, elements to add
// console.log(arr1); // [ 1, 2, 3, 4, 5 ] (3 is added back)

// //. splice can also be used to replace elements in the array
arr1.splice(2, 1, 10); //start index is inclusive, number of elements to remove, elements to add
// console.log(arr1); // [ 1, 2, 10, 4, 5 ] (3 is replaced with 10)

// //. join is used to join all elements of the array into a string, returns a string
let str = arr1.join(', '); //separator is optional, default is comma
// console.log(str); // "1, 2, 10, 4, 5"

// //. reverse is used to reverse the order of elements in the array, modifies the original array
arr1.reverse();
// console.log(arr1); // [ 5, 4, 10, 2, 1 ]

// //. concat is used to merge two or more arrays, returns a new array
let arr4 = [6, 7, 8];
let arr5 = arr1.concat(arr4);
// console.log(arr5); // [ 5, 4, 10, 2, 1, 6, 7, 8 ]
// console.log(arr1); // [ 5, 4, 10, 2, 1 ] (original array is not modified)

// .push can be used to merge two arrays but add [] it as a single element
let arr6 = [6, 7, 8];
arr1.push(arr6); // arr6 is added as a single element
// console.log(arr1); // [ 5, 4, 10, 2, 1, [ 6, 7, 8 ] ] (original array is modified)

// to flatten the array use .flat(), use whenthere is an array inside an array
arr1 = arr1.flat(); // flattens the array by one level
// console.log(arr1); // [ 5, 4, 10, 2, 1, 6, 7, 8 ]


// .sort Compare as strings, JS converts numbers → strings, Compares character by character, like words in a dictionary
// .sort is used to sort the elements of the array, modifies the original array
arr1.sort(); // sorts the array in ascending order (by default it sorts as strings)
// console.log(arr1); // [ 1, 10, 2, 4, 5, 6, 7, 8 ] (10 comes before 2 because it is sorted as string)

// to sort numbers in ascending order use compare function
arr1.sort((a, b) => a - b); // a-b for ascending order
// console.log(arr1); // [ 1, 2, 4, 5, 6, 7, 8, 10 ]

// to sort numbers in descending order use compare function
arr1.sort((a, b) => b - a); // b-a for descending order
// console.log(arr1); // [ 10, 8, 7, 6, 5, 4, 2, 1 ]

//spread: can be use instead of concat to merge two arrays
let arr7 = [...arr1]; //spread operator, creates a shallow copy of arr1
// console.log(arr7); // [ 10, 8, 7, 6, 5, 4, 2, 1 ]
 

// .isArray is used to check if a variable is an array or not, returns boolean value
// console.log(Array.isArray(arr1)); // true
// console.log(Array.isArray('hello')); // false

// .length is used to get the number of elements in the array
// console.log(arr1.length); // 8

//.from is used to create an array from a string or any iterable object
let str2 = 'hello';
let arr8 = Array.from(str2); // creates an array from the string
// console.log(arr8); // [ 'h', 'e', 'l', 'l', 'o' ]

//interview question:
console.log(Array.from({name: 'ali'})); // [] because object is not iterable


// .of is used to create an array from a list of values
let arr9 = Array.of(1, 2, 3, 4, 5); // creates an array from the list of values
// console.log(arr9); // [ 1, 2, 3, 4, 5 ]