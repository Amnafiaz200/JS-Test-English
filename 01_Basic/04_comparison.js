// console.log(null>=0)  //true 0=0
// console.log(null>0)   //false 0>0
// console.log(null==0)  //false 

// console.log(undefined>=0)  //false
// console.log(undefined>0)   //false
// console.log(undefined==0)  //false // avoid using these comparisons

//When comparing null or undefined with other values, they are converted to numbers: null becomes 0, and undefined becomes NaN. 
//However, when using the equality operator (==), null and undefined are only equal to each other and not to any other value.

//Strict equality operator (===) does not perform type conversion, so null === 0 is false and undefined === 0 is also false.
// === check value and datatype both

console.log('5'==5)  //true
console.log('5'===5) //false