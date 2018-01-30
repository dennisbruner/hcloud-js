const snakeCase = require('snake-case')
const ServerType = require('./serverType')
const ServerTypeList = require('./serverTypeList')

class ServerTypesEndpoint {
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
      url: '/server_types',
      method: 'GET',
      params: snakeCaseParams
    }).then(response => {
      // Make new ServerType objects
      let serverTypes = []
      response.data.server_types.forEach(serverType => {
        serverTypes.push(new ServerType(serverType))
      })

      // Return a list
      let meta = response.data.meta
      return new ServerTypeList(this, params, meta, serverTypes)
    })
  }

  get (id) {
    return this.client.axios({
      url: '/server_types/' + id,
      method: 'GET'
    }).then(response => {
      // Return new ServerType instance
      return new ServerType(response.data.server_type)
    })
  }
}

module.exports = ServerTypesEndpoint
