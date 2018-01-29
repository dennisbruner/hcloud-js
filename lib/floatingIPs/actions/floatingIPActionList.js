const Pagination = require('../../pagination')

class FloatingIPActionList extends Pagination {
  constructor (endpoint, id, actions, meta) {
    super(endpoint, meta)
    this.id = id
    this.actions = actions
  }
}

module.exports = FloatingIPActionList
