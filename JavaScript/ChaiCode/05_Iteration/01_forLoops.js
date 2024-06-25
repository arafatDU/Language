// for loop
// Select word and press Ctrl + D to select all the same words
for(let i = 0; i <=10; i++){
  const element = i;
  if(element === 5){
    console.log("FIVE");
  }
  console.log(element);
}


for (let i = 0; i <= 10; i++) {
  console.log(`Outer loop ${i}:`);
  for (let j = 0; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  } 
}

console.log("----------------------------------------------------");
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}




// break and continue
for (let i = 0; i < myArray.length; i++) {
  if (myArray[i] === 5) {
    console.log("FIVE");
    break;
  }
  console.log(myArray[i]);
}

console.log("----------------------------------------------------");
for (let i = 0; i < myArray.length; i++) {
  if (myArray[i] === 5) {
    console.log("FIVE");
    continue;
  }
  console.log(myArray[i]);
}