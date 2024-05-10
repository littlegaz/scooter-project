// require the User and Scooter classes - see where they can be used in ScooterApp.js

const User = require("./User")

class ScooterApp extends User{
  // ScooterApp code here
  constructor(){
    this.stations = {
      "Gedling Station": [],
      "Nottingham Station": [],
      "West Bridgford Station": []
    };
    this.registeredUsers = {}
  }

  registerUser(username, password, age){
    if (age < 18){throw new Error ("too young to register")}
    else if (this.registerUser.hasOwnProperty(username)){throw new Error ("Username already registered")}
    else this.registeredUsers[username] = {password: password, age: age};
    }

  loginUser(username, password){
    const user = this.registeredUsers[username];
    if (user && user.password === password){console.log("user has been logged in")}
    else {throw new Error ("no such user is logged in")}
  }

  logoutUser(username){
    
  }
}

module.exports = ScooterApp
