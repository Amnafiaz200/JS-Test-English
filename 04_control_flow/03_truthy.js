//use if without condition
// let useremail = 'amna@gmail.com' // true, got your email
// let useremail = ''  // false
// let useremail = [] //true

// if (useremail) console.log('got your email');
//  else console.log('does have your email');

// falsy values:
// false, 0, -0, null, undefined, '', bigint 0n, NaN

// truthy vlaues
// [],'false', '0', ' '(space in between string), {} empty object, 
// empty function function(){}, 

//check array is empty or not:
// let useremail2 = [] 
// if (useremail2.length === 0) console.log('array is empty');

//check object is empty or not
// let emptyobj = {}
// if (Object.keys(emptyobj).length === 0){  //Object.keys give you arrays of keys
 //     console.log('object is empty');
    
// }
//false == 0
// true
// false == ''
// true
// 0 == ''
// true

//nullish coalescing operator (??)
// keyowrds are null and undefined.
// when use database, firebase, appwriter , we get two values:
let val1;
// val1 = 5 ?? 10 // print 5, to handle sitauation use ??
// val1 = null ?? 10 // print 10, if complex function at place of 10 five me answer then ok otherwise give null
// val1 = undefined ?? 10 //print 10
// val1 = null ?? 10 ?? 20 // print 10 (first value)

// console.log(val1);

// //ternary operator
// condition ? true: false

let icecreamprice = 100
icecreamprice <= 100 ? console.log('yes') : console.log('no')



