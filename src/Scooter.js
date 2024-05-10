class Scooter {
  // scooter code here
  static nextSerial = 1
  constructor(station){
    this.station = station
    this.user = null
    this.serial = this.nextSerial++
    this.charge = 100
    this.isBroken = false
  }

  rent(user){
    if (this.charge <= 20){throw new Error ("scooter needs to charge")}
    else if (this.isBroken === true){throw new Error ("scooter needs repair")}
    else {this.user = user; this.station = null}
  }

  dock(station){
    this.station = station;
    this.user = null
  }
}

module.exports = Scooter
