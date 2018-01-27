const Pagination = require('../pagination')

class DatacenterList extends Pagination {
  constructor (endpoint, datacenters, meta) {
    super(endpoint, meta)
    this.datacenters = datacenters
  }
}

module.exports = DatacenterList
