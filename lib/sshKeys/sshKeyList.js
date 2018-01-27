const Pagination = require('../pagination')

class SSHKeyList extends Pagination {
  constructor (endpoint, sshKeys, meta) {
    super(endpoint, meta)
    this.sshKeys = sshKeys
  }
}

module.exports = SSHKeyList
