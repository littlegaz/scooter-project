class User {
  // User code here
  constructor(username, password, age){
    this.username = username
    this.password = password
    this.age = age
    this.loggedIn = false
  }

  login(username, password){
    if (username === this.username && password === this.password){this.loggedIn = true}
    else {throw new Error ("Username or password is incorrect")}
  }

  logout(){
    this.loggedIn = false
  }
}

module.exports = User
