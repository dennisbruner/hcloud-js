const Pagination = require('../pagination')

class ServerList extends Pagination {
  constructor (endpoint, servers, meta) {
    super(endpoint, meta)
    this.servers = servers
  }
}

module.exports = ServerList
