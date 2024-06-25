const user = {
  username: "Arafat",
  price: 100,
  welcomeMessage: function() {
    console.log(`Welcome ${this.username}`);
    // console.log(this);
  }
}

user.welcomeMessage();
user.username = "Sakib";
user.welcomeMessage();

console.log(this);
console.log("-------------------------'this' in function-------------------------------------");



function ChaiThis() {
  let uesrname = "Arafat";
  // console.log(this);
  console.log(this.uesrname);
}

ChaiThis();


// +++++++++++++++++++++++++++++++INTERESTING+++++++++++++++++++++++++++++++++

// const Chai = function() {
//   let uesrname = "Arafat";
//   console.log(this);              // global object
//   console.log(this.username);
// }

const Chai = () => {
  let uesrname = "Arafat";
  console.log(this);            // {}
  console.log(this.username);
}

Chai();



console.log("--------------------------Arrow function------------------------------------");

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// }

// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => (num1 + num2);       // when () is used, don't need to use return keyword

const addTwo = (num1, num2) => ({ sum: num1 + num2 });

console.log(addTwo(5, 10));




const array = [1, 2, 3, 4, 5];
array.forEach((num) => {
  console.log(num);
});