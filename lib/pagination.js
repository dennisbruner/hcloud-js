class Pagination {
  constructor (endpoint, params, meta) {
    this.endpoint = endpoint
    this.params = params

    this.page = meta.pagination.page
    this.perPage = meta.pagination.per_page
    this.previousPage = meta.pagination.previous_page
    this.nextPage = meta.pagination.next_page
    this.lastPage = meta.pagination.last_page
    this.totalEntries = meta.pagination.total_entries
  }

  next () {
    if (!this.nextPage) {
      return Promise.reject(new Error('Next page is not available'))
    }

    return this.endpoint.list(Object.assign({}, this.params, {
      page: this.nextPage,
      perPage: this.perPage
    }))
  }

  previous () {
    if (!this.previousPage) {
      return Promise.reject(new Error('Previous page is not available'))
    }

    return this.endpoint.list(Object.assign({}, this.params, {
      page: this.previousPage,
      perPage: this.perPage
    }))
  }

  last () {
    if (!this.lastPage) {
      return Promise.reject(new Error('Last page is not available'))
    }

    return this.endpoint.list(Object.assign({}, this.params, {
      page: this.lastPage,
      perPage: this.perPage
    }))
  }
}

module.exports = Pagination
