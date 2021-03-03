class LoadBalancerTarget {
  constructor (target) {
    this.type = target.type
    this.server = target.server
    this.health_status = target.health_status
    this.use_private_ip = target.use_private_ip
    this.label_selector = target.label_selector
    this.ip = target.ip
    this.targets = target.targets
  }
}

module.exports = LoadBalancerTarget
