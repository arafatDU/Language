function setUsername(username){
  this.username = username;
  console.log("Called");
}

function createUser(username, email, password){
  setUsername.call(this, username);
  this.email = email;
  this.password = password;
}

const arafat = new createUser("arafat", "arafat@scalebis.com", 123);
console.log(arafat);