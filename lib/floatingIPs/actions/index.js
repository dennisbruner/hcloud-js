const snakeCase = require('snake-case')
const Action = require('../../actions/action')
const FloatingIPActionList = require('./floatingIPActionList')

class FloatingIPActionEndpoint {
  constructor (client) {
    this.client = client
  }

  list (id, params) {
    let snakeCaseParams = {}
    if (params) {
      Object.keys(params).forEach(key => {
        snakeCaseParams[snakeCase(key)] = params[key]
      })
    }

    return this.client.axios({
      url: '/floating_ips/' + id + '/actions',
      method: 'GET',
      params: snakeCaseParams
    }).then(response => {
      // Make new Action objects
      let actions = []
      response.data.actions.forEach(action => {
        actions.push(new Action(action))
      })

      // Return a list
      let meta = response.data.meta
      return new FloatingIPActionList(this, params, meta, id, actions)
    })
  }

  get (id, actionID) {
    return this.client.axios({
      url: '/floating_ips/' + id + '/actions/' + actionID,
      method: 'GET'
    }).then(response => {
      // Return new Action instance
      return new Action(response.data.action)
    })
  }

  assign (id, serverID) {
    return this.client.axios({
      url: '/floating_ips/' + id + '/actions/assign',
      method: 'POST',
      data: {
        'server': serverID
      }
    }).then(response => {
      return new Action(response.data.action)
    })
  }

  unassign (id) {
    return this.client.axios({
      url: '/floating_ips/' + id + '/actions/unassign',
      method: 'POST'
    }).then(response => {
      return new Action(response.data.action)
    })
  }

  changeDnsPointer (id, ip, pointer = null) {
    return this.client.axios({
      url: '/floating_ips/' + id + '/actions/change_dns_ptr',
      method: 'POST',
      data: {
        ip,
        'dns_ptr': pointer
      }
    }).then(response => {
      return new Action(response.data.action)
    })
  }

  changeProtection (id, data) {
    return this.client.axios({
      url: '/floating_ips/' + id + '/actions/change_protection',
      method: 'POST',
      data
    }).then(response => {
      return new Action(response.data.action)
    })
  }
}

module.exports = FloatingIPActionEndpoint
