const Pagination = require('../pagination')

class LocationList extends Pagination {
  constructor (endpoint, params, meta, locations) {
    super(endpoint, params, meta)
    this.locations = locations
  }
}

module.exports = LocationList
