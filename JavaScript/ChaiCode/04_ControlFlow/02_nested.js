const marks = 65;

if (marks >= 80) {
  console.log('A');
} else if (marks >= 70) {
  console.log('B');
} else if (marks >= 60) {
  console.log('C');
} else if (marks >= 50) {
  console.log('D');
} else {
  console.log('F');
}



// OR, AND, NOT logical operators
const isUserLoggedIn = true;
const isUserAdmin = true;

if (isUserLoggedIn && isUserAdmin) {
  console.log("Welcome Admin");
} else if (isUserLoggedIn) {
  console.log("Welcome User");
} else {
  console.log("Please login");
}