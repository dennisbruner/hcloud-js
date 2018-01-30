const Pagination = require('../pagination')

class ServerTypeList extends Pagination {
  constructor (endpoint, params, meta, serverTypes) {
    super(endpoint, params, meta)
    this.serverTypes = serverTypes
  }
}

module.exports = ServerTypeList
