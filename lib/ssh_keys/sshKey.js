class SSHKey {
  constructor (client, ssh_key) {
    this.client = client

    Object.keys(ssh_key).forEach(key => {
      this[key] = ssh_key[key]
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
