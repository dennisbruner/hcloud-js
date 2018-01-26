const camelCase = require('camelcase')
const Location = require('../locations/location')

class Datacenter {
  constructor (datacenter) {
    Object.keys(datacenter).forEach(key => {
      this[camelCase(key)] = datacenter[key]
    })

    // Change location to a Location object
    this.location = new Location(this.location)
  }
}

module.exports = Datacenter
