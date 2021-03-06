const { snakeCase } = require('snake-case')
const Action = require('../../actions/action')
const NetworkActionList = require('./networkActionList')

class NetworkActionsEndpoint {
  constructor (client) {
    this.client = client
  }

  async list (id, params) {
    const snakeCaseParams = {}
    if (params) {
      Object.keys(params).forEach(key => {
        snakeCaseParams[snakeCase(key)] = params[key]
      })
    }

    const response = await this.client.axios({
      url: '/networks/' + id + '/actions',
      method: 'GET',
      params: snakeCaseParams
    })

    const actions = []
    response.data.actions.forEach(action => actions.push(new Action(action)))

    const meta = response.data.meta
    return new NetworkActionList(this, params, meta, id, actions)
  }

  async get (networkID, actionID) {
    const response = await this.client.axios({
      url: '/networks/' + networkID + '/actions/' + actionID,
      method: 'GET'
    })

    // Return new Action instance
    return new Action(response.data.action)
  }

  async addSubnet (id, type, ipRange, networkZone = 'eu-central') {
    const response = await this.client.axios({
      url: '/networks/' + id + '/actions/add_subnet',
      method: 'POST',
      data: {
        type,
        ip_range: ipRange,
        network_zone: networkZone
      }
    })

    // Return new Action instance
    return new Action(response.data.action)
  }

  async deleteSubnet (id, ipRange) {
    const response = await this.client.axios({
      url: '/networks/' + id + '/actions/delete_subnet',
      method: 'POST',
      data: {
        ip_range: ipRange
      }
    })

    // Return new Action instance
    return new Action(response.data.action)
  }

  async addRoute (id, destination, gateway) {
    const response = await this.client.axios({
      url: '/networks/' + id + '/actions/add_route',
      method: 'POST',
      data: {
        destination,
        gateway
      }
    })

    // Return new Action instance
    return new Action(response.data.action)
  }

  async deleteRoute (id, destination, gateway) {
    const response = await this.client.axios({
      url: '/networks/' + id + '/actions/delete_route',
      method: 'POST',
      data: {
        destination,
        gateway
      }
    })

    // Return new Action instance
    return new Action(response.data.action)
  }

  async changeIPRange (id, ipRange) {
    const response = await this.client.axios({
      url: '/networks/' + id + '/actions/change_ip_range',
      method: 'POST',
      data: {
        ip_range: ipRange
      }
    })

    // Return new Action instance
    return new Action(response.data.action)
  }

  async changeNetworkProtection (id, disableDelete) {
    const response = await this.client.axios({
      url: '/networks/' + id + '/actions/change_protection',
      method: 'POST',
      data: {
        delete: disableDelete
      }
    })

    // Return new Action instance
    return new Action(response.data.action)
  }
}

module.exports = NetworkActionsEndpoint
