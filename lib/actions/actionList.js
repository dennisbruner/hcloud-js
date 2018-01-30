const Pagination = require('../pagination')

class ActionList extends Pagination {
  constructor (endpoint, params, meta, actions) {
    super(endpoint, params, meta)
    this.actions = actions
  }
}

module.exports = ActionList
