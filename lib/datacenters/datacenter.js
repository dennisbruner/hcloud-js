const Location = require('../locations/location')

class Datacenter {
  constructor (datacenter) {
    this.id = datacenter['id']
    this.name = datacenter['name']
    this.description = datacenter['description']
    this.location = new Location(datacenter['location'])
    this.serverTypes = datacenter['server_types']
  }
}

module.exports = Datacenter
