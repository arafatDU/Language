const userEmail = "arafat.ai";
// Truthy values: true, {}, [], 42,  "0",  " ", "false", function(){}, new Date(), -42, 12n, 3.14, -3.14, Infinity, -Infinity
// Falsy values: false, 0,   -0   , BigInt 0n, "", null, undefined, NaN

if (userEmail) {
  console.log("Welcome User");
} else {
  console.log("Not a valid email address");
} 


// Nullish coalescing operator (??) null, undefined
let username = "";
username = null;
username = undefined;
const displayName = username ?? "Guest";
console.log(displayName);       // ""

const val = null;
const result = val ?? 100 ?? 200;
console.log(result);            // 100


// Ternary operator
const age = 20;
const isAdult = age >= 18 ? "Adult" : "Not Adult";

console.log(isAdult);           // Adult



// Optional chaining operator (?.)
const user = {
  username: "Arafat",
  email: "arafat.ai",
  address: {
    city: "Dhaka",
    country: "Bangladesh"
  }
}

console.log(user.address.city);           // Dhaka
console.log(user.address?.city);           // Dhaka
console.log(user.address?.street);         // undefined
// console.log(user.address?.street?.name);   // undefined
// console.log(user.address?.street?.name?.length);   // TypeError: Cannot read property 'length' of undefined
// console.log(user.address?.street?.name?.length ?? 0);   // 0
// console.log(user.address?.street?.name?.length ?? "Not found");   // Not found
// console.log(user.address?.street?.name?.length ?? 0 ?? "Not found");   // 0
// console.log(user.address?.street?.name?.length ?? 0 ?? "Not found" ?? "Not found 2");   // 0