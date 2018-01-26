const snakeCase = require('snake-case')
const Server = require('./server')
const ServerList = require('./serverList')
const ServerBuilder = require('./serverBuilder')
const Action = require('../actions/action')

class ServersEndpoint {
  constructor (client) {
    this.client = client
  }

  list (params) {
    let snakeCaseParams = {}
    if (params) {
      Object.keys(params).forEach(key => {
        snakeCaseParams[snakeCase(key)] = params[key]
      })
    }
  
    return this.client.axios({
      url: '/servers',
      method: 'GET',
      params: snakeCaseParams
    }).then(response => {
      // Make new Server objects
      let servers = []
      response.data.servers.forEach(server => {
        servers.push(new Server(this, server))
      })
  
      // Return a list
      return new ServerList(this, servers, response.data.meta)
    })
  }

  get (id) {
    return this.client.axios({
      url: '/servers/' + id,
      method: 'GET'
    }).then(response => {
      // Return new Server instance
      return new Server(this, response.data.server)
    })
  }

  build (name) {
    return new ServerBuilder(this, name)
  }

  changeName (id, name) {
    return this.client.axios({
      url: '/servers/' + id,
      method: 'PUT',
      data: {
        name
      }
    }).then(response => {
      return new Server(this, response.data.server)
    })
  }

  delete (id) {
    return this.client.axios({
      url: '/servers/' + id,
      method: 'DELETE'
    }).then(response => {
      return new Action(response.data.action)
    })
  }
}

module.exports = ServersEndpoint
