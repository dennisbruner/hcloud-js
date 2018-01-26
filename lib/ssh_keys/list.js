const SSHKey = require('./sshKey')
const SSHKeyList = require('./sshKeyList')

module.exports = function (params) {
  return this.axios({
    url: '/ssh_keys',
    method: 'GET',
    params
  }).then(response => {
    // Make new SSHKeys objects
    let ssh_keys = []
    response.data.ssh_keys.forEach(ssh_key => {
      ssh_keys.push(new SSHKey(this, ssh_key))
    })

    // Return a list
    return new SSHKeyList(this, ssh_keys, response.data.meta)
  })
}
