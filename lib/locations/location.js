class Location {
  constructor (location) {
    this.id = location.id
    this.name = location.name
    this.description = location.description
    this.country = location.country
    this.city = location.city
    this.latitude = location.latitude
    this.longitude = location.longitude
  }
}

module.exports = Location
