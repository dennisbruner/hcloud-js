const Pagination = require('../../pagination')

class FloatingIPActionsList extends Pagination {
  constructor (endpoint, id, actions, meta) {
    super(endpoint, meta)
    this.id = id
    this.actions = actions
  }
}

module.exports = FloatingIPActionsList
