const snakeCase = require('snake-case')
const ISO = require('./iso')
const ISOList = require('./isoList')

class ISOsEndpoint {
  constructor (client) {
    this.client = client
  }

  async list (params) {
    let snakeCaseParams = {}
    if (params) {
      Object.keys(params).forEach(key => {
        snakeCaseParams[snakeCase(key)] = params[key]
      })
    }

    let response = await this.client.axios({
      url: '/isos',
      method: 'GET',
      params: snakeCaseParams
    })

    // Make new ISO objects
    let isos = []
    response.data.isos.forEach(iso => isos.push(new ISO(iso)))

    // Return a list
    let meta = response.data.meta
    return new ISOList(this, params, meta, isos)
  }

  async get (id) {
    let response = await this.client.axios({
      url: '/isos/' + id,
      method: 'GET'
    })

    // Return new ISO instance
    return new ISO(response.data.iso)
  }
}

module.exports = ISOsEndpoint
