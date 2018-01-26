const Pagination = require('../pagination')

class LocationList extends Pagination {
  constructor (endpoint, locations, meta) {
    super(meta)
    this.endpoint = endpoint
    this.locations = locations
  }

  next () {
    if (!this.nextPage) {
      return Promise.reject(new Error('Next page is not available'))
    }

    return this.endpoint.list({
      page: this.nextPage,
      perPage: this.perPage
    })
  }

  previous () {
    if (!this.previousPage) {
      return Promise.reject(new Error('Previous page is not available'))
    }

    return this.endpoint.list({
      page: this.previousPage,
      perPage: this.perPage
    })
  }

  last () {
    if (!this.lastPage) {
      return Promise.reject(new Error('Last page is not available'))
    }

    return this.endpoint.list({
      page: this.lastPage,
      perPage: this.perPage
    })
  }
}

module.exports = LocationList
