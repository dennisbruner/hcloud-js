const Pagination = require('../pagination')

class ISOList extends Pagination {
  constructor (endpoint, params, meta, isos) {
    super(endpoint, params, meta)
    this.isos = isos
  }
}

module.exports = ISOList
