const Pagination = require('../pagination')

class FloatingIPList extends Pagination {
  constructor (endpoint, params, meta, floatingIPs) {
    super(endpoint, params, meta)
    this.floatingIPs = floatingIPs
  }
}

module.exports = FloatingIPList
