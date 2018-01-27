const Location = require('../locations/location')
const Address = require('../address')

class FloatingIP {
  constructor (endpoint, floatingIP) {
    this.endpoint = endpoint

    this.id = floatingIP['id']
    this.description = floatingIP['description']
    this.ip = floatingIP['ip']
    this.type = floatingIP['type']
    this.server = floatingIP['server']
    this.location = new Location(floatingIP['home_location'])
    this.blocked = floatingIP['blocked']
    this.addresses = floatingIP['dns_ptr'].map(ptr => {
      return new Address(ptr['ip'], ptr['dns_ptr'], null) // TODO: set pointer function
    })
  }

  isV4 () {
    return this.type === 'ipv4'
  }

  isV6 () {
    return this.type === 'ipv6'
  }

  getAddress (ip) {
    if (!ip && this.isV4() && this.addresses.length) {
      return this.addresses[0]
    }

    for (let i = 0; i < this.addresses.length; i++) {
      if (this.addresses[i].ip === ip) {
        return this.addresses[i]
      }
    }

    return null
  }

  changeDescription (description) {
    return this.endpoint.changeDescription(this.id, description)
      .then(floatingIP => {
        this.description = floatingIP.description
        return floatingIP
      })
  }

  delete () {
    return this.endpoint.delete(this.id)
  }
}

module.exports = FloatingIP
