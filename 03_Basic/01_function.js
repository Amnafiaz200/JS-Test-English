//function reference is function name followed by parentheses() this is execution.

function add(num1,num2) {               //function declaration
    // console.log(num1 + num2);           //function body
}
// greet();                       //function call or function invocation

let addition = add(5, 10);        //function call with arguments
// console.log('result', addition); // error, undefined as function has NO return value
//by default function return undefined if no return value is specified


function add(num1,num2) {               
    let result =num1 + num2; 
    return result;                     //return value    
    // console.log('hello'); // code after return will not be executed
}

let result = add(5, 10);   // return value is stored in result variable
// console.log('result',result); // prints result 15
// console.log(add(5, 10)); // prints result 15 without storing in variable

function userlogin(username, password) {
    if(!username || !password) {          // if username or password is not provided, ! means its id defined
        return 'Please enter username and password';  // return error message
    }
    if(password === '12345') {            // if password is correct
        return `${username} Logged in`;         // return success message
    } else {
        return 'Incorrect password';       // return error message
    }
}

let login = userlogin('Amna', '12345');  // function call with arguments
// console.log(login);                     // prints Login successful

let login2 = userlogin('Amna');           // function call with missing argument
// console.log(login2);                    // prints Please enter username and password

let login4 = userlogin('12345');         
// console.log(login4);                    // prints Please enter username and password

let login3 = userlogin('Amna', '54321');  // function call with incorrect password
// console.log(login3);                    // prints Incorrect password


//rest operator 

//in shoping cart we can have multiple items with different prices
function totalPrice(item1, item2, item3) {  // not scalable if we have more items than 3
    return item1,  item2,  item3;
}
// console.log(totalPrice(10, 20, 30)); // prints 30 only, as comma operator returns last value


function totalPrice(item1, item2, item3) {  // not scalable if we have more items than 3
    return `${item1},  ${item2},  ${item3}`;
}
// console.log(totalPrice(10, 20, 30)); // prints 10, 20, 30  

// console.log(totalPrice(10, 20, 30,40,50)); // prints 10, 20, 30  extra values are ignored

//use rest operator to make it scalable(means we can add any number of items)
function totalPrice(...items) {  // rest operator ...items collects all arguments into an array
    return items; // returns array of items
}
// console.log(totalPrice(101, 20, 304,40,500)); // prints [101 20 304 40 500]


function totalPrice(num1, num2, ...items) { 
    return items; // returns array of items 
}
console.log(totalPrice(101, 20, 304,40,500)); // prints [304 40 500] rest operator must be last parameter











