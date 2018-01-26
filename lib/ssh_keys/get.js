const SSHKey = require('./sshKey')

module.exports = function (id) {
  return this.axios({
    url: '/ssh_keys/' + id,
    method: 'GET'
  }).then(response => {
    // Return new SSHKey instance
    return new SSHKey(this, response.data.ssh_key)
  })
}
