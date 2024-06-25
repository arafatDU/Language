let a = 10;
const b = 20;
var c = 30;

if(true){
    let a = 40;
    const b = 50;
    var c = 60;
    console.log("INNER IF: " ,a, b, c);
}

console.log("OUTER IF", a, b, c);


function one() {
  const username = "Arafat";

  function two() {
    const website = "YouTube";
    console.log(username);
  }
  //console.log(website);
  two();
}

one();

if(true){
  const username = "Arafat";
  if(username === "Arafat"){
    const website = "YouTube";
    console.log(username);
  }
  //console.log(website);
}

// console.log(username);


// +++++++++++++++++++++++++++++++INTERESTING+++++++++++++++++++++++++++++++++
// Mini hoisting
console.log(addOne(5));

function addOne(num) {
  return num + 1;
}


const addTwo = function(num) {
  return num + 2;
}
addTwo(5);