const LoadBalancerService = require('./loadBalancerService')
const LoadBalancerTarget = require('./loadBalancerTarget')
const LoadBalancerType = require('../loadBalancerTypes/loadBalancerType')
const Location = require('../locations/location')

class LoadBalancer {
  constructor (endpoint, loadBalancer) {
    this.endpoint = endpoint

    this.id = loadBalancer.id
    this.name = loadBalancer.name
    this.public_net = loadBalancer.public_net
    this.private_net = loadBalancer.private_net
    this.location = new Location(loadBalancer.location)
    this.load_balancer_type = new LoadBalancerType(loadBalancer.load_balancer_type)
    this.protection = loadBalancer.protection
    this.labels = loadBalancer.labels
    this.created = new Date(loadBalancer.created)
    this.services = loadBalancer.services.map(service => new LoadBalancerService(service))
    this.targets = loadBalancer.targets.map(target => new LoadBalancerTarget(target))
    this.algorithm = loadBalancer.algorithm
    this.outgoing_traffic = loadBalancer.outgoing_traffic
    this.ingoing_traffic = loadBalancer.ingoing_traffic
    this.included_traffic = loadBalancer.included_traffic
  }

  addService (id, protocol, listenPort, destinationPort, proxyProtocol, healthCheck, http) {
    return this.endpoint.addService(id, protocol, listenPort, destinationPort, proxyProtocol, healthCheck, http)
  }

  updateService (id, protocol, listenPort, destinationPort, proxyProtocol, healthCheck, http) {
    return this.endpoint.updateService(id, protocol, listenPort, destinationPort, proxyProtocol, healthCheck, http)
  }

  deleteService (id, listenPort) {
    return this.endpoint.deleteService(id, listenPort)
  }

  addTarget (id, type, server, usePrivateIP, labelSelector, ip) {
    return this.endpoint.addTarget(id, type, server, usePrivateIP, labelSelector, ip)
  }

  removeTarget (id, type, server, labelSelector, ip) {
    return this.endpoint.removeTarget(id, type, server, labelSelector, ip)
  }

  changeAlgorithm (id, type) {
    return this.endpoint.changeAlgorithm(id, type)
  }

  changeType (id, loadBalancerType) {
    return this.endpoint.changeType(id, loadBalancerType)
  }

  attachToNetwork (id, network, ip) {
    return this.endpoint.attachToNetwork(id, network, ip)
  }

  detachFromNetwork (id, network) {
    return this.endpoint.detachFromNetwork(id, network)
  }

  enablePublicInterface (id) {
    return this.endpoint.enablePublicInterface(id)
  }

  disablePublicInterface (id) {
    return this.endpoint.disablePublicInterface(id)
  }

  changeProtection (id, disableDelete) {
    return this.endpoint.changeProtection(id, disableDelete)
  }
}

module.exports = LoadBalancer
