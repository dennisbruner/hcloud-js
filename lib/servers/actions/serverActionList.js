const Pagination = require('../../pagination')

class ServerActionList extends Pagination {
  constructor (endpoint, serverID, actions, meta) {
    super(endpoint, meta)
    this.serverID = serverID
    this.actions = actions
  }
}

module.exports = ServerActionList
