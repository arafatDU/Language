let score = 35;
console.log(score);

let balance = new Number(35);
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));


const otherNum = 345.7884;
console.log(otherNum.toPrecision(3));

const revenue = 100000000;
console.log(revenue.toLocaleString('en-BD', {style: 'currency', currency: 'BDT'}));



// +++++++++++++++++++++++++MATHS++++++++++++++++++++++++++++
console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.round(3.5));
// console.log(Math.abs(-3.5));
// console.log(Math.ceil(3.5));
// console.log(Math.floor(3.5));
// console.log(Math.pow(3, 5));
// console.log(Math.sqrt(25));
// console.log(Math.min(1, 2, 3, 4, 5));
// console.log(Math.max(1, 2, 3, 4, 5));

console.log(Math.random());
console.log(Math.floor(Math.random() * 10));
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);  // random number between 10 and 20 inclusive both