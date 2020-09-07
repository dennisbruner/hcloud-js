const FloatingIP = require('./floatingIP')
const Action = require('../actions/action')
const Location = require('../locations/location')
const Server = require('../servers/server')

class FloatingIPBuilder {
  constructor (endpoint, type) {
    this.endpoint = endpoint

    this._type = type
    this._location = undefined
    this._server = undefined
    this._description = undefined
  }

  create () {
    if (!this._type) return Promise.reject(new Error('Type is required'))
    else if (!this._location && !this._server) return Promise.reject(new Error('Either location or server is required'))

    const data = {
      type: this._type,
      home_location: this._location,
      server: this._server,
      description: this._description
    }

    return this.endpoint.client.axios({
      url: '/floating_ips',
      method: 'POST',
      data
    }).then(response => {
      console.log(response.data)
      return {
        floatingIP: new FloatingIP(this.endpoint, response.data.floating_ip),
        action: ('action' in response.data) ? new Action(response.data.action) : null
      }
    })
  }

  type (type) {
    this._type = type

    return this
  }

  location (location) {
    if (location instanceof Location) {
      this._location = location.id
    } else {
      this._location = location
    }

    return this
  }

  server (server) {
    if (server instanceof Server) {
      this._server = server.id
    } else {
      this._server = server
    }

    return this
  }

  description (description) {
    this._description = description

    return this
  }
}

module.exports = FloatingIPBuilder
