// const addTwo = (num1, num2) => (num1 + num2);       // when () is used, don't need to use return keyword
// IIFF: Immediately Invoked Function Expression

// Named IIFE
(function DB() {
  console.log("DB connected");
})();                           // Two IIFE need to be separated by semicolon


// Anonymous IIFE
( (username) => {
  console.log(`Welcome ${username}`);
})("Arafat");