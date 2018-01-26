const IPv4 = require('./ipv4')
const IPv6 = require('./ipv6')

class Network {
  constructor (server, net) {
    this.server = server

    this.ipv4 = new IPv4(this, net['ipv4'])
    this.ipv6 = new IPv6(this, net['ipv6'])
    this.floatingIPs = net['floating_ips']
  }
}

module.exports = Network
