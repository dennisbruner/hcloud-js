const snakeCase = require('snake-case')
const LoadBalancerList = require('./loadBalancerList')
const LoadBalancer = require('./loadBalancer')
const LoadBalancerMetrics = require('./loadBalancerMetrics')
const LoadBalancerActionsEndpoint = require('./actions/index')

class LoadBalancersEndpoint {
  constructor (client) {
    this.client = client
    this.actions = new LoadBalancerActionsEndpoint(this.client)
  }

  async list (params) {
    const snakeCaseParams = {}
    if (params) {
      Object.keys(params).forEach(key => {
        snakeCaseParams[snakeCase(key)] = params[key]
      })
    }

    const response = await this.client.axios({
      url: '/load_balancers',
      method: 'GET',
      params: snakeCaseParams
    })

    // Make new Network objects
    const loadBalancers = []
    response.data.load_balancers.forEach(loadBalancer => loadBalancers.push(new LoadBalancer(this, loadBalancer)))

    // Return a list
    const meta = response.data.meta
    return new LoadBalancerList(this, params, meta, loadBalancers)
  }

  async get (id) {
    const response = await this.client.axios({
      url: '/load_balancers/' + id,
      method: 'GET'
    })

    return new LoadBalancer(this, response.data.load_balancer)
  }

  async create (name, loadBalancerType, algorithm, services, targets, labels, publicInterface, network, networkZone, location) {
    const response = await this.client.axios({
      url: '/load_balancers',
      method: 'POST',
      data: {
        name,
        load_balancer_type: loadBalancerType,
        algorithm,
        services,
        targets,
        labels,
        public_interface: publicInterface,
        network,
        network_zone: networkZone,
        location
      }
    })

    return new LoadBalancer(this, response.data.load_balancer)
  }

  async update (id, name, labels) {
    const response = await this.client.axios({
      url: '/load_balancers/' + id,
      method: 'PUT',
      data: {
        name,
        labels
      }
    })

    return new LoadBalancer(this, response.data.load_balancer)
  }

  async delete (id) {
    await this.client.axios({
      url: '/load_balancers/' + id,
      method: 'DELETE'
    })
    // We can't return Action because Hetzner does not return that https://docs.hetzner.cloud/#load-balancers-delete-a-load-balancer (9.9.2020)
  }

  async getMetrics (id) {
    const response = await this.client.axios({
      url: '/load_balancers/' + id + '/metrics',
      method: 'GET'
    })
    return new LoadBalancerMetrics(response.data.metrics)
  }
}

module.exports = LoadBalancersEndpoint
