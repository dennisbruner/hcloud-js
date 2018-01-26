class IPv4 {
  constructor (network, ipv4) {
    this.network = network

    this.ip = ipv4['ip']
    this.blocked = ipv4['blocked']
    this.dnsPointer = ipv4['dns_ptr']
  }

  setPointer (pointer) {
    // TODO
  }
}

module.exports = IPv4
