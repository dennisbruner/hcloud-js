const snakeCase = require('snake-case')
const Server = require('./server')
const ServerList = require('./serverList')

function list (params) {
  let snakeCaseParams = {}
  if (params) {
    Object.keys(params).forEach(key => {
      snakeCaseParams[snakeCase(key)] = params[key]
    })
  }

  return this.axios({
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

function get (id) {
  return this.axios({
    url: '/servers/' + id,
    method: 'GET'
  }).then(response => {
    // Return new Server instance
    return new Server(this, response.data.server)
  })
}

module.exports = {
  list,
  get
}
