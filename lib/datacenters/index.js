const snakeCase = require('snake-case')
const Datacenter = require('./datacenter')
const DatacenterList = require('./datacenterList')

class DatacentersEndpoint {
  constructor (client) {
    this.client = client
  }

  async list (params) {
    const snakeCaseParams = {}
    if (params) {
      Object.keys(params).forEach(key => {
        snakeCaseParams[snakeCase(key)] = params[key]
      })
    }

    const response = await this.client.axios({
      url: '/datacenters',
      method: 'GET',
      params: snakeCaseParams
    })

    // Make new Datacenter objects
    const datacenters = []
    response.data.datacenters.forEach(datacenter => datacenters.push(new Datacenter(datacenter)))

    // Return a list
    const meta = response.data.meta
    return new DatacenterList(this, params, meta, datacenters)
  }

  async get (id) {
    const response = await this.client.axios({
      url: '/datacenters/' + id,
      method: 'GET'
    })

    // Return new Datacenter instance
    return new Datacenter(response.data.datacenter)
  }
}

module.exports = DatacentersEndpoint
