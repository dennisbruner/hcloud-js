const { snakeCase } = require('snake-case')
const SSHKey = require('./sshKey')
const SSHKeyList = require('./sshKeyList')

class SSHKeysEndpoint {
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
      url: '/ssh_keys',
      method: 'GET',
      params: snakeCaseParams
    })

    // Make new SSHKeys objects
    const sshKeys = []
    response.data.ssh_keys.forEach(sshKey => sshKeys.push(new SSHKey(this, sshKey)))

    // Return a list
    const meta = response.data.meta
    return new SSHKeyList(this, params, meta, sshKeys)
  }

  async get (id) {
    const response = await this.client.axios({
      url: '/ssh_keys/' + id,
      method: 'GET'
    })

    // Return new SSHKey instance
    return new SSHKey(this, response.data.ssh_key)
  }

  async create (name, publicKey) {
    const response = await this.client.axios({
      url: '/ssh_keys',
      method: 'POST',
      data: {
        name,
        public_key: publicKey
      }
    })

    return new SSHKey(this, response.data.ssh_key)
  }

  async changeName (id, name) {
    const response = await this.client.axios({
      url: '/ssh_keys/' + id,
      method: 'PUT',
      data: {
        name
      }
    })

    return response.data
  }

  async delete (id) {
    await this.client.axios({
      url: '/ssh_keys/' + id,
      method: 'DELETE'
    })
  }
}

module.exports = SSHKeysEndpoint
