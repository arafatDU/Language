const myDate = new Date();
console.log(myDate);
console.log(typeof myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toTimeString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());

const myNewDate = new Date("2021-09-01");
const myNewDate2 = new Date(2021, 0, 15);
const myNewDate3 = new Date("01-14-2023");
console.log(myNewDate3.toString());


let myTimeStamps = Date.now();
console.log(myTimeStamps);
console.log(myNewDate3.getTime());
console.log(Math.floor(Date.now() / 1000));


let newDate = new Date();
console.log(newDate);
console.log(`Today is ${newDate.getDate()}-${newDate.getMonth() + 1}-${newDate.getFullYear()}`);

console.log(newDate.toLocaleString('en-BD', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}));
