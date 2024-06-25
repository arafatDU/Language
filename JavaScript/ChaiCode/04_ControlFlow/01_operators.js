// <, >, <=, >=, ==, ===, !=, !==, &&, ||, !, ?: (ternary operator) 
const isUserLoggedIn = true;
const temparate = 30;

if (isUserLoggedIn) {
  console.log("Welcome User");
} else {
  console.log("Please login");
}

if (temparate > 30) {
  console.log("It's hot outside");
} else if (temparate < 30) {
  console.log("It's cold outside");
} else {
  console.log("It's normal outside");
}


// scope of variable
const score = 200;
if(score > 100){
  let msg = "Congratulation";
  console.log(`User score is ${score}. ${msg}`);
}
// console.log(`User score is ${score}. ${msg}`);      // ReferenceError: msg is not defined



// Short form, Implicit scope
const balance = 100;
// Not recommended
if(balance > 50) console.log("Balance is greater than 50"), console.log("Borolox");
else console.log("Balance is less than 50");