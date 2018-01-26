const Pagination = require('../../pagination')

class ServerActionList extends Pagination {
  constructor (endpoint, serverId, actions, meta) {
    super(meta)
    this.endpoint = endpoint
    this.serverId = serverId
    this.actions = actions
  }

  next () {
    if (!this.nextPage) {
      return Promise.reject(new Error('Next page is not available'))
    }

    return this.endpoint.list(this.serverId, {
      page: this.nextPage,
      perPage: this.perPage
    })
  }

  previous () {
    if (!this.previousPage) {
      return Promise.reject(new Error('Previous page is not available'))
    }

    return this.endpoint.list(this.serverId, {
      page: this.previousPage,
      perPage: this.perPage
    })
  }

  last () {
    if (!this.lastPage) {
      return Promise.reject(new Error('Last page is not available'))
    }

    return this.endpoint.list(this.serverId, {
      page: this.lastPage,
      perPage: this.perPage
    })
  }
}

module.exports = ServerActionList
