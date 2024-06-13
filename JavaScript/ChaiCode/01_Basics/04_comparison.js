// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 >= 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);

console.log("2" > 1);
console.log("02" > 1);
console.log("2" > "12");

console.log(null < 0);
console.log(null == 0);
console.log(null >= 0);  // null is converted to 0 when used with >=, >, <=, < but when used with ==, it is not converted to 0

console.log(undefined < 0);
console.log(undefined == 0);
console.log(undefined >= 0);


// === strict equality
console.log("2" == 2);
console.log("2" === 2);