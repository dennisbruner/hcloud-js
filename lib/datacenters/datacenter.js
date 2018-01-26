const Location = require('../locations/location')

class Datacenter {
  constructor (datacenter) {
    Object.keys(datacenter).forEach(key => {
      this[key] = datacenter[key]
    })

    // Change location to a Location object
    this.location = new Location(this.location)
  }
}

module.exports = Datacenter
