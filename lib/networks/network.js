const Subnet = require('./subnet')
const Route = require('./route')

class Network {
  constructor (endpoint, network) {
    this.endpoint = endpoint

    this.id = network['id']
    this.name = network['name']
    this.ip_range = network['ip_range']
    this.subnets = network['subnets'].map(subnet => new Subnet(subnet))
    this.routes = network['routes'].map(route => new Route(route))
    this.servers = network['servers']
    this.load_balancers = network['load_balancers']
    this.protection = network['protection']
    this.labels = network['labels']
    this.created = new Date(network['created'])
  }

  addSubnet (type, ipRange, networkZone) {
    return this.endpoint.addSubnet(this.id, type, ipRange, networkZone)
  }

  deleteSubnet (ipRange) {
    return this.endpoint.deleteSubnet(this.id, ipRange)
  }

  addRoute (destination, gateway) {
    return this.endpoint.addRoute(this.id, destination, gateway)
  }

  deleteRoute (destination, gateway) {
    return this.endpoint.deleteRoute(this.id, destination, gateway)
  }

  changeIPRange (ipRange) {
    return this.endpoint.changeIPRange(this.id, ipRange)
  }

  changeNetworkProtection (disableDelete) {
    return this.endpoint.changeNetworkProtection(this.id, disableDelete)
  }
}

module.exports = Network
