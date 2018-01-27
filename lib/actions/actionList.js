const Pagination = require('../pagination')

class ActionList extends Pagination {
  constructor (endpoint, actions, meta) {
    super(endpoint, meta)
    this.actions = actions
  }
}

module.exports = ActionList
