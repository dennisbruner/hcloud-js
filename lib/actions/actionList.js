const Pagination = require('../pagination')

class ActionList extends Pagination {
  constructor (client, actions, meta) {
    super(meta)
    this.client = client
    this.actions = actions
  }
}

module.exports = ActionList
