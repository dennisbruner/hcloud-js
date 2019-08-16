const snakeCase = require('snake-case')
const Location = require('./location')
const LocationList = require('./locationList')

class LocationsEndpoint {
  constructor (client) {
    this.client = client
  }

  async list (params) {
    let snakeCaseParams = {}
    if (params) {
      Object.keys(params).forEach(key => {
        snakeCaseParams[snakeCase(key)] = params[key]
      })
    }

    let response = await this.client.axios({
      url: '/locations',
      method: 'GET',
      params: snakeCaseParams
    })

    // Make new Location objects
    let locations = []
    response.data.locations.forEach(location => {
      locations.push(new Location(location))
    })

    // Return a list
    let meta = response.data.meta
    return new LocationList(this, params, meta, locations)
  }

  async get (id) {
    let response = await this.client.axios({
      url: '/locations/' + id,
      method: 'GET'
    })

    // Return new Location instance
    return new Location(response.data.location)
  }
}

module.exports = LocationsEndpoint
