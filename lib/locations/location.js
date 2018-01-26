const camelCase = require('camelcase')

class Location {
  constructor (location) {
    Object.keys(location).forEach(key => {
      this[camelCase(key)] = location[key]
    })
  }
}

module.exports = Location
