const snakeCase = require('snake-case')
const ServerType = require('./serverType')
const ServerTypeList = require('./serverTypeList')

function list (params) {
  let snakeCaseParams = {}
  if (params) {
    Object.keys(params).forEach(key => {
      snakeCaseParams[snakeCase(key)] = params[key]
    })
  }

  return this.axios({
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
    return new ServerTypeList(this, serverTypes, response.data.meta)
  })
}

function get (id) {
  return this.axios({
    url: '/server_types/' + id,
    method: 'GET'
  }).then(response => {
    // Return new ServerType instance
    return new ServerType(response.data.server_type)
  })
}

module.exports = {
  list,
  get
}
