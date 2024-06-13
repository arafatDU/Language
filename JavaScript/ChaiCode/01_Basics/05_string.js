let myName = "Arafat";
let myUni = "University of Dhaka";

console.log("Hello, I am " + myName + " and I am a student of " + myUni);
console.log(`Hello, I am ${myName.toUpperCase()} and I am a student of ${myUni}`); // template literals preferred

let nickName = new String("Arafat");
console.log(typeof myName, typeof nickName);

console.log(nickName[2]);
console.log(nickName.__proto__);

// console.log(nickName.length);
// console.log(nickName.toUpperCase());

console.log(nickName.indexOf("a"));
console.log(nickName.charAt(2));

let anotherName = nickName.substring(0, 4);
console.log(anotherName);

let myStr = nickName.slice(-5, 5);
console.log(myStr);


let phone = "  01712345678  ";
console.log(phone.trim());

let url = "https://arafat.com/arafathussainX%20portfolio";
console.log(url.replace("%20", "-"));
console.log(url.includes("arafat"));



// string to array - split()
let country = "Bangladesh Srilanka Nepal SA Netherlands";
let countries = country.split(" ");
console.log(countries);