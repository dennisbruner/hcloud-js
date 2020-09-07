class Subnet {
  constructor (subnet) {
    this.type = subnet.type
    this.ip_range = subnet.ip_range
    this.network_zone = subnet.network_zone
    this.gateway = subnet.gateway
  }
}

module.exports = Subnet
