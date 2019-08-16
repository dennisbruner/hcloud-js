const snakeCase = require('snake-case')
const Action = require('../../actions/action')
const FloatingIPActionList = require('./floatingIPActionList')

class FloatingIPActionEndpoint {
  constructor (client) {
    this.client = client
  }

  async list (id, params) {
    let snakeCaseParams = {}
    if (params) {
      Object.keys(params).forEach(key => {
        snakeCaseParams[snakeCase(key)] = params[key]
      })
    }

    let response = await this.client.axios({
      url: '/floating_ips/' + id + '/actions',
      method: 'GET',
      params: snakeCaseParams
    })

    // Make new Action objects
    let actions = []
    response.data.actions.forEach(action => actions.push(new Action(action)))

    // Return a list
    let meta = response.data.meta
    return new FloatingIPActionList(this, params, meta, id, actions)
  }

  async get (id, actionID) {
    let response = await this.client.axios({
      url: '/floating_ips/' + id + '/actions/' + actionID,
      method: 'GET'
    })

    // Return new Action instance
    return new Action(response.data.action)
  }

  async assign (id, serverID) {
    let response = await this.client.axios({
      url: '/floating_ips/' + id + '/actions/assign',
      method: 'POST',
      data: {
        'server': serverID
      }
    })

    return new Action(response.data.action)
  }

  async unassign (id) {
    let response = await this.client.axios({
      url: '/floating_ips/' + id + '/actions/unassign',
      method: 'POST'
    })

    return new Action(response.data.action)
  }

  async changeDnsPointer (id, ip, pointer = null) {
    let response = await this.client.axios({
      url: '/floating_ips/' + id + '/actions/change_dns_ptr',
      method: 'POST',
      data: {
        ip,
        'dns_ptr': pointer
      }
    })

    return new Action(response.data.action)
  }

  async changeProtection (id, data) {
    let response = await this.client.axios({
      url: '/floating_ips/' + id + '/actions/change_protection',
      method: 'POST',
      data
    })

    return new Action(response.data.action)
  }
}

module.exports = FloatingIPActionEndpoint
