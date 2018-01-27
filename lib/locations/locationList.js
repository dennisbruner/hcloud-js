const Pagination = require('../pagination')

class LocationList extends Pagination {
  constructor (endpoint, locations, meta) {
    super(endpoint, meta)
    this.locations = locations
  }
}

module.exports = LocationList
