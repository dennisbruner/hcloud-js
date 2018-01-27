const Address = require('../address')
const AddressBlock = require('../addressBlock')

class PublicNetwork {
  constructor (server, publicNet) {
    this.server = server

    // IPv4
    let ipv4 = publicNet['ipv4']
    this.ipv4 = new Address(ipv4['ip'], ipv4['dns_ptr'], ipv4['blocked'],
      (ip, pointer) => this.server.endpoint.actions.changeDnsPointer(this.server.id, ip, pointer))

    // IPv6
    let ipv6 = publicNet['ipv6']
    this.ipv6 = new AddressBlock(ipv6['ip'], ipv6['dns_ptr'], ipv6['blocked'],
      (ip, pointer) => this.server.endpoint.actions.changeDnsPointer(this.server.id, ip, pointer))

    this.floatingIPs = publicNet['floating_ips']
  }
}

module.exports = PublicNetwork
