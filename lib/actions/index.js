const snakeCase = require('snake-case')
const Action = require('./action')
const ActionList = require('./actionList')

class ActionsEndpoint {
  constructor (client) {
    this.client = client
  }

  list (params) {
    let snakeCaseParams = {}
    if (params) {
      Object.keys(params).forEach(key => {
        snakeCaseParams[snakeCase(key)] = params[key]
      })
    }

    return this.client.axios({
      url: '/actions',
      method: 'GET',
      params: snakeCaseParams
    }).then(response => {
      // Make new Action objects
      let actions = []
      response.data.actions.forEach(action => {
        actions.push(new Action(action))
      })

      // Return a list
      return new ActionList(this, actions, response.data.meta)
    })
  }

  get (id) {
    return this.client.axios({
      url: '/actions/' + id,
      method: 'GET'
    }).then(response => {
      // Return new Action instance
      return new Action(response.data.action)
    })
  }
}

module.exports = ActionsEndpoint
