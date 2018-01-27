const Pagination = require('../pagination')

class ISOList extends Pagination {
  constructor (endpoint, isos, meta) {
    super(endpoint, meta)
    this.isos = isos
  }
}

module.exports = ISOList
