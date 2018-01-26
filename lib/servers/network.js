const IPv4 = require('./ipv4')
const IPv6 = require('./ipv6')

class Network {
  constructor (client, net) {
    this.client = client

    this.ipv4 = new IPv4(this.client, net['ipv4'])
    this.ipv6 = new IPv6(this.client, net['ipv6'])
    this.floatingIPs = net['floating_ips']
  }
}

module.exports = Network
