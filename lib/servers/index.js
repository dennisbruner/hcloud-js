const { snakeCase } = require('snake-case')
const Server = require('./server')
const ServerList = require('./serverList')
const ServerBuilder = require('./serverBuilder')
const Action = require('../actions/action')
const ServerActionsEndpoint = require('./actions')

class ServersEndpoint {
  constructor (client) {
    this.client = client
    this.actions = new ServerActionsEndpoint(this.client)
  }

  async list (params) {
    const snakeCaseParams = {}
    if (params) {
      Object.keys(params).forEach(key => {
        snakeCaseParams[snakeCase(key)] = params[key]
      })
    }

    const response = await this.client.axios({
      url: '/servers',
      method: 'GET',
      params: snakeCaseParams
    })

    // Make new Server objects
    const servers = []
    response.data.servers.forEach(server => servers.push(new Server(this, server)))

    // Return a list
    const meta = response.data.meta
    return new ServerList(this, params, meta, servers)
  }

  async get (id) {
    const response = await this.client.axios({
      url: '/servers/' + id,
      method: 'GET'
    })

    // Return new Server instance
    return new Server(this, response.data.server)
  }

  build (name) {
    return new ServerBuilder(this, name)
  }

  async changeName (id, name) {
    const response = await this.client.axios({
      url: '/servers/' + id,
      method: 'PUT',
      data: {
        name
      }
    })

    return new Server(this, response.data.server)
  }

  async delete (id) {
    const response = await this.client.axios({
      url: '/servers/' + id,
      method: 'DELETE'
    })

    return new Action(response.data.action)
  }
}

module.exports = ServersEndpoint
