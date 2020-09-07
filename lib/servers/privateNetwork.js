class PrivateNetwork {
  constructor (privateNet) {
    this.network = privateNet.network
    this.ip = privateNet.ip
    this.alias_ips = privateNet.alias_ips
    this.mac_address = privateNet.mac_address
  }
}

module.exports = PrivateNetwork
