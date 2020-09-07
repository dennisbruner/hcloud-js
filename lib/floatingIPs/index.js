const snakeCase = require('snake-case')
const FloatingIPActionEndpoint = require('./actions')
const FloatingIP = require('./floatingIP')
const FloatingIPList = require('./floatingIPList')
const FloatingIPBuilder = require('./floatingIPBuilder')

class FloatingIPsEndpoint {
  constructor (client) {
    this.client = client
    this.actions = new FloatingIPActionEndpoint(this.client)
  }

  async list (params) {
    const snakeCaseParams = {}
    if (params) {
      Object.keys(params).forEach(key => {
        snakeCaseParams[snakeCase(key)] = params[key]
      })
    }

    const response = await this.client.axios({
      url: '/floating_ips',
      method: 'GET',
      params: snakeCaseParams
    })

    // Make new FloatingIP objects
    const floatingIPs = []
    response.data.floating_ips.forEach(floatingIP => floatingIPs.push(new FloatingIP(this, floatingIP)))

    // Return a list
    const meta = response.data.meta
    return new FloatingIPList(this, params, meta, floatingIPs)
  }

  async get (id) {
    const response = await this.client.axios({
      url: '/floating_ips/' + id,
      method: 'GET'
    })

    // Return new FloatingIP instance
    return new FloatingIP(this, response.data.floating_ip)
  }

  build (type) {
    return new FloatingIPBuilder(this, type)
  }

  async changeDescription (id, description) {
    const response = await this.client.axios({
      url: '/floating_ips/' + id,
      method: 'PUT',
      data: {
        description
      }
    })

    // Return new FloatingIP instance
    return new FloatingIP(this, response.data.floating_ip)
  }

  async delete (id) {
    await this.client.axios({
      url: '/floating_ips/' + id,
      method: 'DELETE'
    })
  }
}

module.exports = FloatingIPsEndpoint
