// Singleton object => Object.create() method

// Object literal
const mySymbol = Symbol('key1');

const jsUser = {
    name: 'Arafat',
    "full name": 'Arafat Hussain',
    [mySymbol]: 'mykey1',
    age: 25,
    location: "Narail",
    email: "arafat@google.com",
    isLogin: true,
    lastLogin: ["Saturday", "Monday"]
}

console.log(jsUser.email);
console.log(jsUser['email']);
console.log(jsUser["full name"]);
console.log(jsUser[mySymbol], typeof jsUser[mySymbol]);


jsUser.email = "arafat@openai.com";
// Object.freeze(jsUser); 
// jsUser.email = "arafat@samsung.com";
console.log(jsUser);


jsUser.greeting = function() {
    return `Hello, ${this.name}`;
}

console.log(jsUser.greeting, typeof jsUser.greeting);
console.log(jsUser.greeting());



// ---------------------------------------------------
// Object constructor - Singleton object
console.log("---------------------------------------------------");

const proUser = new Object();
proUser.name = "Arafat";
proUser.age = 25;
proUser.location = "Narail";
proUser.email = "arafat@google.com";
proUser.isLogin = true;

//console.log(proUser);

const regularUser = {
  email: "sakib@google.com",
  fullname: {
    firstName: "Sakib",
    lastName: "Al Hasan"
  },
  isLogin: false
}

console.log(regularUser.fullname.firstName);


const obj1 = { 1: "a", 2: "b", 3: "c" };
const obj2 = { 3: "d", 5: "e", 6: "f" };

// const obj3 = { obj1, obj2 };
// console.log(obj3);

// const obj4 = { ...obj1, ...obj2 };  // Highly recommended
// console.log(obj4);

const obj5 = Object.assign(obj1, obj2);
console.log(obj5);
console.log(obj1); // obj1 is modified


// ---------------------------------------------------
const users = [
  {
    id: 1,
    name: "Arafat",
    email: "arafat@gmail.com"
  },
  {
    id: 2,
    name: "Sakib",
    email: "sakib@gmail.com"
  },
  {
    id: 3,
    name: "Rakib",
    email: "rakib@gmail.com"
  }
];

console.log(users[1].name);
console.log("Keys: ", Object.keys(users[1]));
console.log("Values: " , Object.values(users[1]));
console.log("Entries: " , Object.entries(users[1]));
console.log(users[1].hasOwnProperty('name'));





// -------------------------Object destructing & JSON API--------------------------
console.log("---------------------------------------------------");

const course = {
  name: "JavaScript",
  duration: "3 months",
  price: 1000,
  courseInstructor: {
    name: "Arafat",
    email: "arafat@gmail.com"
  }
};

const { name: courseName, duration, price, courseInstructor } = course;
console.log(courseName, duration, price, courseInstructor);

// {
//   "name": "JavaScript",
//   "duration": "3 months",
//   "price": 1000
// }

// {
//   "results": [
//     {},
//     {},
//     {}
//   ]
// }