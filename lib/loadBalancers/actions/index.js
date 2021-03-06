const { snakeCase } = require('snake-case')
const Action = require('../../actions/action')
const LoadBalancerActionList = require('./loadBalancerActionList')

class LoadBalancerActionsEndpoint {
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
      url: '/load_balancers/' + id + '/actions',
      method: 'GET',
      params: snakeCaseParams
    })

    const actions = []
    response.data.actions.forEach(action => actions.push(new Action(action)))

    const meta = response.data.meta
    return new LoadBalancerActionList(this, params, meta, id, actions)
  }

  async get (loadBalancerID, actionID) {
    const response = await this.client.axios({
      url: '/load_balancers/' + loadBalancerID + '/actions/' + actionID,
      method: 'GET'
    })

    // Return new Action instance
    return new Action(response.data.action)
  }

  async addService (id, protocol, listenPort, destinationPort, proxyProtocol, healthCheck, http) {
    const response = await this.client.axios({
      url: '/load_balancers/' + id + '/actions/add_service',
      method: 'POST',
      data: {
        protocol,
        listen_port: listenPort,
        destination_port: destinationPort,
        proxyprotocol: proxyProtocol,
        health_check: healthCheck,
        http
      }
    })

    // Return new Action instance
    return new Action(response.data.action)
  }

  async updateService (id, protocol, listenPort, destinationPort, proxyProtocol, healthCheck, http) {
    const response = await this.client.axios({
      url: '/load_balancers/' + id + '/actions/update_service',
      method: 'POST',
      data: {
        protocol,
        listen_port: listenPort,
        destination_port: destinationPort,
        proxyprotocol: proxyProtocol,
        health_check: healthCheck,
        http
      }
    })

    // Return new Action instance
    return new Action(response.data.action)
  }

  async deleteService (id, listenPort) {
    const response = await this.client.axios({
      url: '/load_balancers/' + id + '/actions/delete_service',
      method: 'POST',
      data: {
        listen_port: listenPort
      }
    })

    // Return new Action instance
    return new Action(response.data.action)
  }

  async addTarget (id, type, server, usePrivateIP, labelSelector, ip) {
    const response = await this.client.axios({
      url: '/load_balancers/' + id + '/actions/add_target',
      method: 'POST',
      data: {
        type,
        server,
        use_private_ip: usePrivateIP,
        label_selector: labelSelector,
        ip
      }
    })

    // Return new Action instance
    return new Action(response.data.action)
  }

  async removeTarget (id, type, server, labelSelector, ip) {
    const response = await this.client.axios({
      url: '/load_balancers/' + id + '/actions/remove_target',
      method: 'POST',
      data: {
        type,
        server,
        label_selector: labelSelector,
        ip
      }
    })

    // Return new Action instance
    return new Action(response.data.action)
  }

  async changeAlgorithm (id, type) {
    const response = await this.client.axios({
      url: '/load_balancers/' + id + '/actions/change_algorithm',
      method: 'POST',
      data: {
        type
      }
    })

    // Return new Action instance
    return new Action(response.data.action)
  }

  async changeType (id, loadBalancerType) {
    const response = await this.client.axios({
      url: '/load_balancers/' + id + '/actions/change_type',
      method: 'POST',
      data: {
        load_balancer_type: loadBalancerType
      }
    })

    // Return new Action instance
    return new Action(response.data.action)
  }

  async attachToNetwork (id, network, ip) {
    const response = await this.client.axios({
      url: '/load_balancers/' + id + '/actions/attach_to_network',
      method: 'POST',
      data: {
        network,
        ip
      }
    })

    // Return new Action instance
    return new Action(response.data.action)
  }

  async detachFromNetwork (id, network) {
    const response = await this.client.axios({
      url: '/load_balancers/' + id + '/actions/detach_from_network',
      method: 'POST',
      data: {
        network
      }
    })

    // Return new Action instance
    return new Action(response.data.action)
  }

  async enablePublicInterface (id) {
    const response = await this.client.axios({
      url: '/load_balancers/' + id + '/actions/enable_public_interface',
      method: 'POST'
    })

    // Return new Action instance
    return new Action(response.data.action)
  }

  async disablePublicInterface (id) {
    const response = await this.client.axios({
      url: '/load_balancers/' + id + '/actions/disable_public_interface',
      method: 'POST'
    })

    // Return new Action instance
    return new Action(response.data.action)
  }

  async changeProtection (id, disableDelete) {
    const response = await this.client.axios({
      url: '/load_balancers/' + id + '/actions/change_protection',
      method: 'POST',
      data: {
        delete: disableDelete
      }
    })

    // Return new Action instance
    return new Action(response.data.action)
  }
}

module.exports = LoadBalancerActionsEndpoint
