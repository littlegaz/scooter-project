// require the User and Scooter classes - see where they can be used in ScooterApp.js

const User = require("./User")

class ScooterApp extends User{
  // ScooterApp code here
  constructor(stations, registeredUsers, username, password, age, loggedIn){
    super(username, password, age, loggedIn)
    this.stations = stations
    this.registeredUsers = registeredUsers
  }

  registeredUser(username, password, age){
    if (age < 18){throw Error `too young to register`}
    else if (username === this.username){throw Error `already registered`}
    else console.log(`user has been registered`)
  }

  loginUser(username, password){
    
  }
}

module.exports = ScooterApp
