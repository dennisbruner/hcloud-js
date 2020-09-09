class LoadBalancerType {
  constructor (loadBalancerType) {
    this.id = loadBalancerType.id
    this.name = loadBalancerType.name
    this.description = loadBalancerType.description
    this.max_connections = loadBalancerType.max_connections
    this.max_services = loadBalancerType.max_services
    this.max_assigned_certificates = loadBalancerType.max_assigned_certificates
    this.deprecated = loadBalancerType.deprecated
    this.prices = []
    loadBalancerType.prices.forEach(price => {
      this.prices.push({
        location: price.location,
        priceHourly: {
          net: parseFloat(price.price_hourly.net),
          gross: parseFloat(price.price_hourly.gross)
        },
        priceMonthly: {
          net: parseFloat(price.price_monthly.net),
          gross: parseFloat(price.price_monthly.gross)
        }
      })
    })
  }
}

module.exports = LoadBalancerType
