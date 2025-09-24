// we want function that executed immediately
//use iife, immeriately invoked function expresssion

// function name(){
//     console.log('Amna');  // normal way
// }
// name()

// (function name(){
//     console.log('Amna');    // named iife
// })();  // ; is must to separate functions,put explicitly
// when write two iife at a time, ';' is must


// ( ()=> {                       // simple iife
//     console.log('Amna');      //arrow function in iife
// })()                      

( (name)=> {
    console.log(`Amna ${name}`);      
})('sara')









