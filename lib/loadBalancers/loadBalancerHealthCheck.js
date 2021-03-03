class LoadBalancerHealthCheck {
  constructor (healthCheck) {
    this.protocol = healthCheck.protocol
    this.port = healthCheck.port
    this.interval = healthCheck.interval
    this.timeout = healthCheck.timeout
    this.retries = healthCheck.retries
    this.http = healthCheck.http
  }
}

module.exports = LoadBalancerHealthCheck
