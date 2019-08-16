const snakeCase = require('snake-case')
const Action = require('./action')
const ActionList = require('./actionList')

class ActionsEndpoint {
  constructor (client) {
    this.client = client
  }

  async list (params) {
    let snakeCaseParams = {}
    if (params) {
      Object.keys(params).forEach(key => {
        snakeCaseParams[snakeCase(key)] = params[key]
      })
    }

    let response = await this.client.axios({
      url: '/actions',
      method: 'GET',
      params: snakeCaseParams
    })

    // Make new Action objects
    let actions = []
    response.data.actions.forEach(action => actions.push(new Action(action)))

    // Return a list
    let meta = response.data.meta
    return new ActionList(this, params, meta, actions)
  }

  async get (id) {
    let response = await this.client.axios({
      url: '/actions/' + id,
      method: 'GET'
    })

    return new Action(response.data.action)
  }
}

module.exports = ActionsEndpoint
