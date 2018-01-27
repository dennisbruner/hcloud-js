const Pagination = require('../pagination')

class FloatingIPList extends Pagination {
  constructor (endpoint, floatingIPs, meta) {
    super(endpoint, meta)
    this.floatingIPs = floatingIPs
  }
}

module.exports = FloatingIPList
