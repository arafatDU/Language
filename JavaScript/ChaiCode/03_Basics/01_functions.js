function sayMyName() {
  console.log('My name is Arafat');
}

//sayMyName();

function addTwoNum(num1, num2){
  return num1 + num2;
  console.log(num1 + num2);
}

//addTwoNum(3, 5);
//addTwoNum(3, null);
// parameter and argument
const result = addTwoNum(3, 6);
console.log(result);


function loginUserMsg(username = "User"){
  if(!username){
    return 'Please provide a username';
  }
  return `Welcome ${username}`;
}

console.log(loginUserMsg('Arafat'));
console.log(loginUserMsg());



// Rest parameter, rest operator => ...
function sumAll(num1, num2, ...args){
  return args;
}
console.log(sumAll(1, 2, 3, 4, 5, 6));



const user = {
  name: 'Arafat',
  age: 25
}

function handleObject(anyObj){
  console.log(`My name is ${anyObj.name} and I am ${anyObj.age} years old`);
}

handleObject(user);
handleObject({name: 'Sakib', age: 30});