let num = "35.55abc";
num = null;
num = undefined;
num = true;
console.log(num, typeof num);

let numInt = parseInt(num);  // parseInt() will convert the string to integer
let valueInNum = Number(num);  // Number() will convert the string to number

console.log(numInt, typeof numInt);
console.log(valueInNum, typeof valueInNum);

// "35.55abc" => NaN
// null => 0
// undefined => NaN
// true => 1, false => 0

// -------------------------------------------

let isNan = isNaN(numInt);
console.log(isNan);

// -------------------------------------------
let isLoggedIn = 1;
isLoggedIn = "";
isLoggedIn = "arafat";
isLoggedIn = null;
isLoggedIn = undefined;
let isLogged = Boolean(isLoggedIn);
console.log(isLogged, typeof isLogged);

// 0 => false, 1 => true
// "" => false, "arafat" => true
// null => false, undefined => false
// NaN => false


// -------------------------------------------
let someNum = 35;
someNum = true;
let numStr = String(someNum);
console.log(numStr, typeof numStr);




// *****************************Operations*******************************
let value = 35;
let negValue = -value;
// console.log(negValue);

// console.log(5 + 5);
// console.log(5 - 5);
// console.log(5 * 5);
// console.log(5 / 5);
// console.log(5 ** 5);
// console.log(5 % 5);

console.log(1 + 2 + "3");
console.log(1 + "2" + 3);
console.log("1" + 2 + 3);

console.log(+true);
console.log(+"");

let num1, num2, num3;
num1 = num2 = num3 = 5;

let gameCounter = 35;
gameCounter++;
--gameCounter;
console.log(gameCounter);