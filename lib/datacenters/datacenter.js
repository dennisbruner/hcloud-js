const Location = require('../locations/location')
const ServerType = require('../serverTypes/serverType')

class Datacenter {
  constructor (datacenter) {
    this.id = datacenter['id']
    this.name = datacenter['name']
    this.description = datacenter['description']
    this.location = new Location(datacenter['location'])
    this.serverTypes = datacenter['server_types']
  }

  isSupported (serverType) {
    if (serverType instanceof ServerType) {
      return serverType.id in this.serverTypes.supported
    } else {
      return serverType in this.serverTypes.supported
    }
  }

  isAvailable (serverType) {
    if (serverType instanceof ServerType) {
      return serverType.id in this.serverTypes.available
    } else {
      return serverType in this.serverTypes.available
    }
  }
}

module.exports = Datacenter
