class SSHKey {
  constructor (client, sshKey) {
    this.client = client

    this.id = sshKey['id']
    this.name = sshKey['name']
    this.fingerprint = sshKey['fingerprint']
    this.publicKey = sshKey['public_key']
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
