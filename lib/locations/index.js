const snakeCase = require('snake-case')
const Location = require('./location')
const LocationList = require('./locationList')

function list (params) {
  let snakeCaseParams = {}
  Object.keys(params).forEach(key => {
    snakeCaseParams[snakeCase(key)] = params[key]
  })

  return this.axios({
    url: '/locations',
    method: 'GET',
    params: snakeCaseParams
  }).then(response => {
    // Make new Location objects
    let locations = []
    response.data.locations.forEach(location => {
      locations.push(new Location(location))
    })

    // Return a list
    return new LocationList(this, locations, response.data.meta)
  })
}

function get (id) {
  return this.axios({
    url: '/locations/' + id,
    method: 'GET'
  }).then(response => {
    // Return new Location instance
    return new Location(response.data.location)
  })
}

module.exports = {
  list,
  get
}
