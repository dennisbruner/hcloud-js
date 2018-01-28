class SSHKey {
  constructor (endpoint, sshKey) {
    this.endpoint = endpoint

    this.id = sshKey['id']
    this.name = sshKey['name']
    this.fingerprint = sshKey['fingerprint']
    this.publicKey = sshKey['public_key']
  }

  changeName (name) {
    return this.endpoint.changeName(this.id, name)
  }

  delete () {
    return this.endpoint.delete(this.id)
  }
}

module.exports = SSHKey
