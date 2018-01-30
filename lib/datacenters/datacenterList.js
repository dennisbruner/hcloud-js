const Pagination = require('../pagination')

class DatacenterList extends Pagination {
  constructor (endpoint, params, meta, datacenters) {
    super(endpoint, params, meta)
    this.datacenters = datacenters
  }
}

module.exports = DatacenterList
