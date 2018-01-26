const snakeCase = require('snake-case')
const Datacenter = require('./datacenter')
const DatacenterList = require('./datacenterList')

function list (params) {
  let snakeCaseParams = {}
  if (params) {
    Object.keys(params).forEach(key => {
      snakeCaseParams[snakeCase(key)] = params[key]
    })
  }

  return this.axios({
    url: '/datacenters',
    method: 'GET',
    params: snakeCaseParams
  }).then(response => {
    // Make new Datacenter objects
    let datacenters = []
    response.data.datacenters.forEach(datacenter => {
      datacenters.push(new Datacenter(datacenter))
    })

    // Return a list
    return new DatacenterList(this, datacenters, response.data.meta)
  })
}

function get (id) {
  return this.axios({
    url: '/datacenters/' + id,
    method: 'GET'
  }).then(response => {
    // Return new Datacenter instance
    return new Datacenter(response.data.datacenter)
  })
}

module.exports = {
  list,
  get
}
