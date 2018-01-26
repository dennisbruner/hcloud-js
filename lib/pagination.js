class Pagination {
  constructor (meta) {
    this.page = meta['pagination']['page']
    this.perPage = meta['pagination']['per_page']
    this.previousPage = meta['pagination']['previous_page']
    this.nextPage = meta['pagination']['next_page']
    this.lastPage = meta['pagination']['last_page']
    this.totalEntries = meta['pagination']['total_entries']
  }

  // These functions should be implemented by other classes
  next () {}
  previous () {}
  last () {}
}

module.exports = Pagination
