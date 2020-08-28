const Pagination = require('../pagination')

class NetworkList extends Pagination {
  constructor (endpoint, params, meta, networks) {
    super(endpoint, params, meta)
    this.networks = networks
  }
}

module.exports = NetworkList
