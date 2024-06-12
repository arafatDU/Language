const roll_no = 35;
let email = "arafat@gmail.com";
var myName = "Arafat";
let myResult;

// roll_no = 1435;  // not allowed

email = "arafat@iit.du.ac.bd";
myName = "Arafat Hossain";

console.log(roll_no);
console.log(email);
console.log(myName);

/*
Don't use var keyword. Use let and const instead. 
Because var is function scoped and let, const are block scoped.
*/

console.table([roll_no, email, myName, myResult]);
