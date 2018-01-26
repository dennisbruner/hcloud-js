const snakeCase = require('snake-case')
const SSHKey = require('./sshKey')
const SSHKeyList = require('./sshKeyList')

class SSHKeysEndpoint {
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
      url: '/ssh_keys',
      method: 'GET',
      params: snakeCaseParams
    }).then(response => {
      // Make new SSHKeys objects
      let sshKeys = []
      response.data.ssh_keys.forEach(sshKey => {
        sshKeys.push(new SSHKey(this, sshKey))
      })

      // Return a list
      return new SSHKeyList(this, sshKeys, response.data.meta)
    })
  }

  get (id) {
    return this.client.axios({
      url: '/ssh_keys/' + id,
      method: 'GET'
    }).then(response => {
      // Return new SSHKey instance
      return new SSHKey(this, response.data.ssh_key)
    })
  }

  create (name, publicKey) {
    return this.client.axios({
      url: '/ssh_keys',
      method: 'POST',
      data: {
        name,
        public_key: publicKey
      }
    }).then(response => {
      return new SSHKey(this, response.data.ssh_key)
    })
  }

  changeName (id, name) {
    return this.client.axios({
      url: '/ssh_keys/' + id,
      method: 'PUT',
      data: {
        name
      }
    }).then(response => {
      return response.data
    })
  }

  delete (id) {
    return this.client.axios({
      url: '/ssh_keys/' + id,
      method: 'DELETE'
    }).then(() => null)
  }
}

module.exports = SSHKeysEndpoint
