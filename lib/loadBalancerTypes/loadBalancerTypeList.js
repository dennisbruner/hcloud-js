const Pagination = require('../pagination')

class LoadBalancerTypeList extends Pagination {
  constructor (endpoint, params, meta, loadBalancerTypes) {
    super(endpoint, params, meta)
    this.load_balancer_types = loadBalancerTypes
  }
}

module.exports = LoadBalancerTypeList
