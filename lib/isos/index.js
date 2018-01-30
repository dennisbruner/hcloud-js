const snakeCase = require('snake-case')
const ISO = require('./iso')
const ISOList = require('./isoList')

class ISOsEndpoint {
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
      url: '/isos',
      method: 'GET',
      params: snakeCaseParams
    }).then(response => {
      // Make new ISO objects
      let isos = []
      response.data.isos.forEach(iso => {
        isos.push(new ISO(iso))
      })

      // Return a list
      let meta = response.data.meta
      return new ISOList(this, params, meta, isos)
    })
  }

  get (id) {
    return this.client.axios({
      url: '/isos/' + id,
      method: 'GET'
    }).then(response => {
      // Return new ISO instance
      return new ISO(response.data.iso)
    })
  }
}

module.exports = ISOsEndpoint
