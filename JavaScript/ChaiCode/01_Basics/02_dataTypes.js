"use strict"; // treat all js code as new version of js

// alert(3 + 3)  // this is not allowed in node.js

console.log("Arafat");


let name = "Arafat";
let age = 22;
let isLoggedIn = true;
let state = null;
const sym = Symbol('My Symbol');
const sym1 = Symbol(123);
const sym2 = Symbol(123);
console.log(sym1 === sym2);  // false


// Premitive Data Types - call by value
// number => 2^53 - 1
// bigint example: const value = 9007199254740991n;
// string
// boolean
// null => standlone value
// undefined => not assign the value
// symbol => unique value example: const sym1 = Symbol('My Symbol');


// Non-premitive Data types - Reference Data Types
// Arrays
// Object Literals
// Functions
// Dates

let myArr = [1, 2, 3, 4, 5];
let myObj = {
  name: "Arafat",
  age: 22
}
let myFunc = function () {
  console.log("Hello");
}

// console.log(typeof "Arafat");
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof myArr);
// console.log(typeof myObj);
// console.log(typeof myFunc);



// *****************************Memory*******************************
// Stack => Primitive Data Types, Heap => Reference Data Types
// Stack => LIFO, Heap => Random Access
// Stack => Faster, Heap => Slower
// Stack => Fixed Size, Heap => Dynamic Size
// Stack => Limited Memory, Heap => Unlimited Memory
// Stack => Local Variables, Heap => Global Variables
// Stack => Memory Allocation, Heap => Memory Deallocation
// Stack => Memory Management, Heap => Garbage Collection
// Stack => Static Memory Allocation, Heap => Dynamic Memory Allocation

let num = 35;
let anotherNum = num;
anotherNum = 45;
// console.log(num, anotherNum); // 35, 45

let myArr1 = [1, 2, 3, 4, 5];
let myArr2 = myArr1;
myArr2[0] = 100;
// console.log(myArr1, myArr2); // [100, 2, 3, 4, 5], [100, 2, 3, 4, 5]

let myObj1 = {
  name: "Arafat",
  age: 22
}
let myObj2 = myObj1;
myObj2.name = "Arafat Hussain";
// console.log(myObj1.name, myObj2.name); // Arafat Hussain, Arafat Hussain