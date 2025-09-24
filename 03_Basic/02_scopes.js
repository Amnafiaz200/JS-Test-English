//{} is a scope, appear in function and block statements like if, for, while etc
//variables defined inside a scope{} are not accessible outside that scope
let x = 1; //global scope
//block scope  from line 5 to 9
if (true) {
   let x = 10; 
   const y = 20;
   var z = 30; // var is not block scoped, its function scoped
   c =10 // if we do not use let, const or var, its global scoped
   // console.log('inner:' , x); // prints 1, a is global scoped

}

// console.log('outer:',x); // ReferenceError: x is not defined, let and const are block scoped
// console.log(y); // ReferenceError: y is not defined
// console.log(z); // prints 30, var is function scoped, not block scoped
// console.log(c); // prints 10, c is global scoped

//thats why its recommended to use let and const instead of var, to avoid accidental global variables
//create problem whem many coders work on same codebase
// the varibles inside block scope should not be accessible outside the block scope
// if another code use same varible for different purpose, it will create problem
// for example if we have a loop inside a function and we use i as loop counter
// if we use var i, then it will be accessible outside the loop, if another code use i for different purpose, it will create problem
// so its better to use let or const for block scope variables

// var can be accessed outside the block scope, because its function scoped
for (var i = 0; i < 5; i++) {
      // console.log(i);            // prints 0,1,2,3,4
}
// console.log('outside loop:', i); // prints 5, var is function scoped, not block scoped


// console.log(i); // prints 5, i is global scoped, because we used var


//var cannot be accessed outside the function scope
function test() {
   for (var i = 1; i < 5; i++) {
      // console.log(i);
   }
   // console.log('outside loop:', n); // prints 5, var is function scoped, not block scoped
}
test();
// console.log(n); // ReferenceError: n is not defined, n is function scoped


//to avoid such problems, its better to use let or const for block scope variables
function test2() {
   for (let i = 0; i < 5; i++) {
      // console.log(i);
   }
   // console.log('outside loop:', i); // ReferenceError: i is not defined, let is block scoped
}

test2();
// console.log(i); // ReferenceError: i is not defined, i is block scoped

//nested scopes, closure technique, function inside function, dome(document object model) manipulation

// parent scope, child scope
// child scope can access parent scope variables, but parent scope cannot access child scope variables
function one() {
   let name1 = 'I am Amna'; // parent scope variable

   function two() {
      let name2 = 'I am Ali'; // child scope variable
      console.log(name2); // prints 'I am Ali'
      console.log(name1); // prints 'I am Amna', child scope can access parent scope variables
   }
   // console.log(name2); ReferenceError: name2 is not defined, parent scope cannot access child scope variables
   // two(); //if two is not called here, it will not execute, so name2 will not be printed
}
// console.log(one()); // undefined, parent function does not return anything
// two(); // ReferenceError:child function is not accessible outside parent function
// one(); // calling parent function, which in turn calls child function

// call one ==> call two ==> print name2 ==> print name1 ==> return to one ==> return to global scope

//closure: a function along with its lexical scope, even when the function is executed outside that scope
//inner function has access to outer function's variables even after outer function has returned


//function hold by variable in closure
let myname = function outer(name) {   //this function is also called IIFE (immediately invoked function expression) or expression function
   return name + 'fiaz'
}

// console.log(myname('Amna ')); // prints 'Amna fiaz'

// we can call function before its declaration, because of hoisting
// console.log(myname2('Ali ')); // prints 'Ali fiaz'
function myname2(name) {     // function declaration
   return name + 'fiaz'
}
// but we cannot call function expression(function in variable) before its declaration
// console.log(myname3('Aisha ')); // ReferenceError: Cannot access 'myname3' before initialization
let myname3 = function (name) {   //function expression
   return name + 'fiaz'
}
// Hoisting allows to use,or call functions and variables before they are declared in code. 











