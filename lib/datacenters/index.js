const snakeCase = require('snake-case')
const Datacenter = require('./datacenter')
const DatacenterList = require('./datacenterList')

class DatacentersEndpoint {
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
      let meta = response.data.meta
      return new DatacenterList(this, params, meta, datacenters)
    })
  }

  get (id) {
    return this.client.axios({
      url: '/datacenters/' + id,
      method: 'GET'
    }).then(response => {
      // Return new Datacenter instance
      return new Datacenter(response.data.datacenter)
    })
  }
}

module.exports = DatacentersEndpoint
