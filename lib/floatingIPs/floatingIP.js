const Location = require('../locations/location')
const Address = require('../address')
const Server = require('../servers/server')

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
      return new Address(ptr['ip'], ptr['dns_ptr'], this.blocked,
        (ip, pointer) => this.endpoint.actions.changeDnsPointer(this.id, ip, pointer))
    })
  }

  getActions (params) {
    return this.endpoint.actions.list(this.id, params)
  }

  getAction (id) {
    return this.endpoint.actions.get(this.id, id)
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

  getPointer (ip) {
    if (!ip && this.isV4() && this.addresses.length) {
      return this.addresses[0].pointer
    }

    for (let i = 0; i < this.addresses.length; i++) {
      let address = this.addresses[i]
      if (address.ip === ip) {
        return address.pointer
      }
    }

    return null
  }

  setPointer (ip, pointer) {
    let address = this.getAddress(ip)
    if (address) {
      return address.setPointer(pointer)
    }

    return this.endpoint.actions.changeDnsPointer(this.id, ip, pointer)
      .then(response => {
        address = new Address(ip, pointer, this.blocked,
          (ip, pointer) => this.endpoint.actions.changeDnsPointer(this.id, ip, pointer))
        this.addresses.push(address)
        return response
      })
  }

  changeDescription (description) {
    return this.endpoint.changeDescription(this.id, description)
  }

  delete () {
    return this.endpoint.delete(this.id)
  }

  assign (server) {
    let serverID = server
    if (server instanceof Server) {
      serverID = server.id
    }

    return this.endpoint.actions.assign(this.id, serverID)
  }

  unassign () {
    return this.endpoint.actions.unassign(this.id)
  }

  changeProtection (data) {
    return this.endpoint.actions.changeProtection(this.id)
  }
}

module.exports = FloatingIP
