const account_id = 123456;     //cant be changed
let account_name = "Amna";         //used now in java
var account_country = "Pakistan";  //scope problem, its old way, prefer not to use because of scope problem and redeclaration problem, function scope
account_city = "Karachi";  //global variable, avoid using it, can be used without var, let or const but can create problem in future
let account_state //undefined, ; can or cant be used
// account_id = 654321;   //error

account_name = "Amina";  //reassigned

console.log(account_id);
console.log(account_name);
console.log(account_country);

console.table({account_id, account_name, account_country, account_city, account_state});
