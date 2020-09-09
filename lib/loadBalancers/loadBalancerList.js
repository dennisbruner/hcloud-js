const Pagination = require('../pagination')

class LoadBalancerList extends Pagination {
  constructor (endpoint, params, meta, loadBalancers) {
    super(endpoint, params, meta)
    this.load_balancers = loadBalancers
  }
}

module.exports = LoadBalancerList
