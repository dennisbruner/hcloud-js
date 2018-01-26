class SSHKey {
  constructor (client, sshKey) {
    this.client = client

    Object.keys(sshKey).forEach(key => {
      this[key] = sshKey[key]
    })
  }

  changeName (name) {
    return this.client.ssh_keys.changeName(this.id, name)
      .then(data => {
        this.name = data.name
        return data
      })
  }

  delete () {
    return this.client.ssh_keys.delete(this.id)
  }
}

module.exports = SSHKey
