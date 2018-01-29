class ServerType {
  constructor (serverType) {
    this.id = serverType['id']
    this.name = serverType['name']
    this.description = serverType['description']
    this.cores = serverType['cores']
    this.memory = serverType['memory']
    this.disk = serverType['disk']
    this.storageType = serverType['storage_type']

    this.prices = []
    serverType['prices'].forEach(price => {
      this.prices.push({
        location: price['location'],
        priceHourly: {
          net: parseFloat(price['price_hourly']['net']),
          gross: parseFloat(price['price_hourly']['gross'])
        },
        priceMonthly: {
          net: parseFloat(price['price_monthly']['net']),
          gross: parseFloat(price['price_monthly']['gross'])
        }
      })
    })
  }
}

module.exports = ServerType
