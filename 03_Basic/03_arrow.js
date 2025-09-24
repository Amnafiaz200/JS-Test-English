//arrow function does not have its own 'this' context, it takes 'this' from its surrounding lexical context.
// so its better to use arrow function in callbacks, like in event listeners, timeouts, intervals, array methods etc.
// arrow function cannot be used as constructor function, because it does not have its own 'this' context.
// arrow function does not have 'arguments' object, so we cannot use 'arguments' object in arrow function.
// arrow function cannot be used as method in object, because it does not have its own 'this' context.

// normal function
let name1 = {
    fname: 'Amna',
    lname: 'Fiaz',
    fullname: function() {     // method in object
        // return this.fname + ' ' + this.lname; this is also correct but dont use both, use one of them, return the outside console, console then outside call
        // console.log(`${this.fname} ${this.lname}`);
        // console.log(this); 
        // 'this' refers to the object 'name1', because normal function has its own 'this' context
    }    // using 'this' is a good practice
    
};

// console.log(this); // {},current context is empty.As we are node environment, so 'this' refers to global object, which is an empty object in node environment.
// in browser, 'this' refers to the window object, which is the global object in browser environment.
// in past js engine is in browser environment only , now this engine is separated from brower and call it node.js or deno.'this' refers to window object in browser, but in node environment, 'this' refers to empty object.
       
name1.fullname(); // prints 'Amna Fiaz'

//change context(value) of 'this' using call method
name1.fname = 'sara';
name1.fullname(); // prints 'sara Fiaz'

//console.log(this) work in object not in function
function test() {
    let name = 'Amna';
    // console.log(this.name); // undefined, because 'this' refers to global object, which does not have 'name' property

}
// test();

// arrow function  () => {} is used to define arrow function
let name2 = () => {    // basic arrow function
    let name = 'Amna';
    // console.log(this.name); 
    // arrow function does not have its own 'this' context, it takes 'this' from its surrounding lexical context.
}

let numadd =(num1, num2)=> {    // when use {} must use return keyword
   return num1*num2  //explict return
}
// console.log(numadd(3,2));

let numadd2 =(num1, num2)=> (num1+num2)  //implicit return
let numadd3 =(num1, num2)=> num1+num2  // can be used this way
// console.log(numadd2(3,2));  //this is mostly used in react
// console.log(numadd3(3,4));

//return object
let numadd4 =(num1, num2)=> ({name:'Amna'}) //{name:'Amna'}
let numadd5 =(num1, num2)=> {name:'Amna'} // undefined
// take care of using () when return object
console.log(numadd4(3,4));
console.log(numadd5(3,4));

//classic function, arrow function can be written after .foreach

// myarray.forEach(()=> {}) like that








