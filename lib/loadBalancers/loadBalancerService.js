const LoadBalancerHealthCheck = require('./loadBalancerHealthCheck')
class LoadBalancerService {
  constructor (service) {
    this.protocol = service.protocol
    this.listen_port = service.listen_port
    this.destination_port = service.destination_port
    this.proxyprotocol = service.proxyprotocol
    this.health_check = new LoadBalancerHealthCheck(service.health_check)
    this.http = service.http
  }
}

module.exports = LoadBalancerService
