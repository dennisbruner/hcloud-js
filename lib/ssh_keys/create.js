const SSHKey = require('./sshKey')

module.exports = function (name, public_key) {
  return this.axios({
    url: '/ssh_keys',
    method: 'POST',
    data: {
      name,
      public_key
    }
  }).then(response => {
    return new SSHKey(this, response.data.ssh_key)
  })
}
