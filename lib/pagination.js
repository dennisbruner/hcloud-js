const camelCase = require('camelcase')

class Pagination {
  constructor (meta) {
    Object.keys(meta['pagination']).forEach(key => {
      this[camelCase(key)] = meta['pagination'][key]
    })
  }

  // These functions should be implemented by other classes
  next () {}
  previous () {}
  last () {}
}

module.exports = Pagination
