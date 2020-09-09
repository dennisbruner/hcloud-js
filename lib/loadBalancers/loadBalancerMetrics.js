class LoadBalancerMetrics {
  constructor (metrics) {
    this.start = metrics.start
    this.end = metrics.end
    this.step = metrics.step
    this.time_series = metrics.time_series
  }
}

module.exports = LoadBalancerMetrics
