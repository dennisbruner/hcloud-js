const Server = require('./server')
const Action = require('../actions/action')
const ServerType = require('../serverTypes/serverType')
const Datacenter = require('../datacenters/datacenter')
const Location = require('../locations/location')
const Image = require('../images/image')
const SSHKey = require('../sshKeys/sshKey')

class ServerBuilder {
  constructor (endpoint, name) {
    this.endpoint = endpoint

    this._name = name
    this._serverType = undefined
    this._datacenter = undefined
    this._location = undefined
    this._startAfterCreate = true
    this._image = undefined
    this._sshKeys = []
    this._userData = undefined
  }

  create () {
    if (!this._serverType) return Promise.reject(new Error('A server type is required'))
    else if (!this._image) return Promise.reject(new Error('An image is required'))

    let requestData = {
      'name': this._name,
      'server_type': this._serverType,
      'datacenter': this._datacenter,
      'location': this._location,
      'start_after_create': this._startAfterCreate,
      'image': this._image,
      'ssh_keys': this._sshKeys,
      'user_data': this._user_data
    }

    return this.endpoint.client.axios({
      url: '/servers',
      method: 'POST',
      data: requestData
    }).then(response => {
      // Return new Server and Action instance
      return {
        server: new Server(this.client, response.data.server),
        action: new Action(response.data.action)
      }
    })
  }

  name (name) {
    this._name = name

    return this
  }

  type (serverType) {
    // You can pass a ServerType class instance
    if (serverType instanceof ServerType) {
      this._serverType = serverType.id
    } else {
      this._serverType = serverType
    }

    return this
  }

  datacenter (datacenter) {
    // You can pass a Datacenter class instance
    if (datacenter instanceof Datacenter) {
      this._datacenter = datacenter.id
    } else {
      this._datacenter = datacenter
    }

    return this
  }

  location (location) {
    // You can pass a Location class instance
    if (location instanceof Location) {
      this._location = location.id
    } else {
      this._location = location
    }

    return this
  }

  startAfterCreate (startAfterCreate) {
    this._startAfterCreate = startAfterCreate

    return this
  }

  image (image) {
    // You can pass an Image class instance
    if (image instanceof Image) {
      this._image = image.id
    } else {
      this._image = image
    }

    return this
  }

  sshKey (sshKey) {
    // You can pass a SSHKey class instance
    if (sshKey instanceof SSHKey) {
      this._sshKeys.push(sshKey.id)
    } else {
      this._sshKeys.push(sshKey)
    }

    return this
  }

  userData (userData) {
    this._userData = userData

    return this
  }
}

module.exports = ServerBuilder
