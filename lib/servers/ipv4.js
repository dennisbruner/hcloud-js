class IPv4 {
  constructor (client, ipv4) {
    this.client = client

    this.ip = ipv4['ip']
    this.blocked = ipv4['blocked']
    this.dnsPointer = ipv4['dns_ptr']
  }

  setPointer (pointer) {
    // TODO
  }
}

module.exports = IPv4
