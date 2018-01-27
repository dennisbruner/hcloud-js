const snakeCase = require('snake-case')
const Action = require('../../actions/action')
const ServerActionList = require('./serverActionList')

class ServerActionsEndpoint {
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
      url: '/servers/' + id + '/actions',
      method: 'GET',
      params: snakeCaseParams
    }).then(response => {
      // Make new Action objects
      let actions = []
      response.data.actions.forEach(action => {
        actions.push(new Action(action))
      })

      // Return a list
      return new ServerActionList(this, id, actions, response.data.meta)
    })
  }

  get (serverId, actionId) {
    return this.client.axios({
      url: '/servers/' + serverId + '/actions/' + actionId,
      method: 'GET'
    }).then(response => {
      // Return new Action instance
      return new Action(response.data.action)
    })
  }

  powerOn (id) {
    return this.client.axios({
      url: '/servers/' + id + '/actions/poweron',
      method: 'POST'
    }).then(response => {
      return new Action(response.data.action)
    })
  }

  powerOff (id) {
    return this.client.axios({
      url: '/servers/' + id + '/actions/poweroff',
      method: 'POST'
    }).then(response => {
      return new Action(response.data.action)
    })
  }

  reboot (id) {
    return this.client.axios({
      url: '/servers/' + id + '/actions/reboot',
      method: 'POST'
    }).then(response => {
      return new Action(response.data.action)
    })
  }

  reset (id) {
    return this.client.axios({
      url: '/servers/' + id + '/actions/reset',
      method: 'POST'
    }).then(response => {
      return new Action(response.data.action)
    })
  }

  shutdown (id) {
    return this.client.axios({
      url: '/servers/' + id + '/actions/shutdown',
      method: 'POST'
    }).then(response => {
      return new Action(response.data.action)
    })
  }

  resetPassword (id) {
    return this.client.axios({
      url: '/servers/' + id + '/actions/reset_password',
      method: 'POST'
    }).then(response => {
      return {
        rootPassword: response.data['root_password'],
        action: new Action(response.data.action)
      }
    })
  }
}

module.exports = ServerActionsEndpoint
