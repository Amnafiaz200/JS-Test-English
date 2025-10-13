// check value by multiple conditions easily
// switch case use in redux
// switch (key) {
//     case value:                //syntax
        
//         break;

//     default:
//         break;
// }

let month = 3
switch (month) {
    case 1:                       //shift alt downarraow(duplicate)
        console.log('january');
        
        break;
    case 2:                       //shift alt downarraow(duplicate)
        console.log('feb');
        
        break;
    case 3:                       //shift alt downarraow(duplicate)
        console.log('march');     // if break not apply, where case match, from there to end, execute all the code except default
        
        break;
    case 4:                       //shift alt downarraow(duplicate)
        console.log('april');
        
        break;
        
    default:
        console.log('defaut case'); // print march
        
        break;
}



