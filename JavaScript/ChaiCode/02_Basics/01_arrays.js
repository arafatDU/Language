const myArr = [1, 2, 3, 4, 5];
const myArr2 = new Array(1, 2, 3, 4, 5);
console.log(myArr);

myArr.push(6);
myArr.push(7);
myArr.pop();
myArr.unshift(9);  // Add to the beginning
myArr.shift();  // Remove from the beginning
console.log(myArr);

console.log(myArr.includes(3));
console.log(myArr.indexOf(9));


const newArrStr = myArr.join();
console.log(newArrStr, typeof newArrStr);


// slice and splice (slice does not modify the original array)
console.log("Before slice: ", myArr);
const myArr3 = myArr.slice(1, 3);
console.log(myArr3)
console.log("After slice: ", myArr);

const myArr4 = myArr.splice(1, 3);
console.log(myArr4);
console.log("After splice: ", myArr);



// ---------------------------------------------------
console.log("---------------------------------------------------");


const marverl_heroes = ['Thor', 'Ironman', 'SpiderMan'];
const dc_heroes = ['Superman', 'Batman', 'WonderWoman'];

//marverl_heroes.push(dc_heroes);  // array inside a array, change the original array
// console.log(marverl_heroes);
// console.log(marverl_heroes[3][1]);


const all_heroes = marverl_heroes.concat(dc_heroes);
console.log(all_heroes);

// spread operator
const all_heroes2 = [...marverl_heroes, ...dc_heroes];
console.log(all_heroes2);



// ---------------------------------------------------
const numbers = [1, 2, 3, [4, 5, 6, [7, 8, 9]], 10, [11, 12, 13]];
const flatNumbers = numbers.flat(Infinity);
console.log(flatNumbers);


console.log(Array.isArray("Arafat"));
console.log(Array.from("Arafat"));
console.log(Array.from([1, 2, 3], x => x * 2));
console.log(Array.from({name: "Arafat"}));        // Interesting for Interview

console.log(Array.of(1, 2, 3, 4, 5));    // Create an array from the arguments