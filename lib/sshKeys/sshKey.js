const camelCase = require('camelcase')

class SSHKey {
  constructor (client, sshKey) {
    this.client = client

    Object.keys(sshKey).forEach(key => {
      this[camelCase(key)] = sshKey[key]
    })
  }

  changeName (name) {
    return this.client.sshKeys.changeName(this.id, name)
      .then(data => {
        this.name = data.name
        return data
      })
  }

  delete () {
    return this.client.sshKeys.delete(this.id)
  }
}

module.exports = SSHKey
