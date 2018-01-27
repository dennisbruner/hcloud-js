const Pagination = require('../pagination')

class ServerTypeList extends Pagination {
  constructor (endpoint, serverTypes, meta) {
    super(endpoint, meta)
    this.serverTypes = serverTypes
  }
}

module.exports = ServerTypeList
