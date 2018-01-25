class Location {
  constructor (location) {
    Object.keys(location).forEach(key => {
      this[key] = location[key]
    })
  }
}

module.exports = Location
