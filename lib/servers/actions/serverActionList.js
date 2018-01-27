const Pagination = require('../../pagination')

class ServerActionList extends Pagination {
  constructor (endpoint, serverId, actions, meta) {
    super(endpoint, meta)
    this.serverId = serverId
    this.actions = actions
  }
}

module.exports = ServerActionList
