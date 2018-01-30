const Pagination = require('../pagination')

class ServerList extends Pagination {
  constructor (endpoint, params, meta, servers) {
    super(endpoint, params, meta)
    this.servers = servers
  }
}

module.exports = ServerList
