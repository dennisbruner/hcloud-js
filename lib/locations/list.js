const Location = require('./location')
const LocationList = require('./locationList')

module.exports = function (params) {
  return this.axios({
    url: '/locations',
    method: 'GET',
    params
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
