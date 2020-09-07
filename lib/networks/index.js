const snakeCase = require('snake-case')
const NetworkList = require('./networkList')
const Network = require('./network')
const NetworkActionsEndpoint = require('./actions/index')

class NetworksEndpoint {
  constructor (client) {
    this.client = client
    this.actions = new NetworkActionsEndpoint(this.client)
  }

  async list (params) {
    let snakeCaseParams = {}
    if (params) {
      Object.keys(params).forEach(key => {
        snakeCaseParams[snakeCase(key)] = params[key]
      })
    }

    let response = await this.client.axios({
      url: '/servers',
      method: 'GET',
      params: snakeCaseParams
    })

    // Make new Network objects
    let servers = []
    response.data.networks.forEach(server => servers.push(new Network(this, server)))

    // Return a list
    let meta = response.data.meta
    return new NetworkList(this, params, meta, servers)
  }

  async get (id) {
    let response = await this.client.axios({
      url: '/networks/' + id,
      method: 'GET'
    })

    return new Network(this, response.data.network)
  }

  async create (name, ipRange, subnets, routes, labels) {
    let response = await this.client.axios({
      url: '/networks',
      method: 'POST',
      data: {
        name,
        ip_range: ipRange,
        subnets,
        routes,
        labels
      }
    })

    return new Network(this, response.data.network)
  }

  async update (id, name, labels) {
    let response = await this.client.axios({
      url: '/networks/' + id,
      method: 'PUT',
      data: {
        name,
        labels
      }
    })

    return new Network(this, response.data.network)
  }

  async delete (id) {
    await this.client.axios({
      url: '/networks/' + id,
      method: 'DELETE'
    })
    // We can't return Action because Hetzner does not return that https://docs.hetzner.cloud/#networks-delete-a-network (29.8.2020)
  }
}

module.exports = NetworksEndpoint
