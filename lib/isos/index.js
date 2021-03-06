const { snakeCase } = require('snake-case')
const ISO = require('./iso')
const ISOList = require('./isoList')

class ISOsEndpoint {
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
      url: '/isos',
      method: 'GET',
      params: snakeCaseParams
    })

    // Make new ISO objects
    const isos = []
    response.data.isos.forEach(iso => isos.push(new ISO(iso)))

    // Return a list
    const meta = response.data.meta
    return new ISOList(this, params, meta, isos)
  }

  async get (id) {
    const response = await this.client.axios({
      url: '/isos/' + id,
      method: 'GET'
    })

    // Return new ISO instance
    return new ISO(response.data.iso)
  }
}

module.exports = ISOsEndpoint
