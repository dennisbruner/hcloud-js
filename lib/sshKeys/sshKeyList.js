const Pagination = require('../pagination')

class SSHKeyList extends Pagination {
  constructor (endpoint, params, meta, sshKeys) {
    super(endpoint, params, meta)
    this.sshKeys = sshKeys
  }
}

module.exports = SSHKeyList
