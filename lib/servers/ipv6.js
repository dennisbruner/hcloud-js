class IPv6 {
  constructor (client, ipv6) {
    this.client = client

    this.ip = ipv6['ip']
    this.blocked = ipv6['blocked']
    this.dnsPointer = ipv6['dns_ptr']
  }

  getPointer (ip) {
    for (let i = 0; i < this.dnsPointer.length; i++) {
      let pointer = this.dnsPointer[i]
      if (pointer.ip === ip) {
        return pointer
      }
    }

    return null
  }

  setPointer (ip, pointer) {
    // TODO
  }
}

module.exports = IPv6
