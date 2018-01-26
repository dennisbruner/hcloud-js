const Pagination = require('../pagination')

class DatacenterList extends Pagination {
  constructor (client, datacenters, meta) {
    super(meta)
    this.client = client
    this.datacenters = datacenters
  }

  next () {
    if (!this.nextPage) {
      return Promise.reject(new Error('Next page is not available'))
    }

    return this.client.datacenters.list({
      page: this.nextPage,
      perPage: this.perPage
    })
  }

  previous () {
    if (!this.previousPage) {
      return Promise.reject(new Error('Previous page is not available'))
    }

    return this.client.datacenters.list({
      page: this.previousPage,
      perPage: this.perPage
    })
  }

  last () {
    if (!this.lastPage) {
      return Promise.reject(new Error('Last page is not available'))
    }

    return this.client.datacenters.list({
      page: this.lastPage,
      perPage: this.perPage
    })
  }
}

module.exports = DatacenterList
