const { snakeCase } = require('snake-case')
const Action = require('./action')
const ActionList = require('./actionList')

class ActionsEndpoint {
  constructor (client) {
    this.client = client
  }

  async list (params) {
    const snakeCaseParams = {}
    if (params) {
      Object.keys(params).forEach(key => {
        snakeCaseParams[snakeCase(key)] = params[key]
      })
    }

    const response = await this.client.axios({
      url: '/actions',
      method: 'GET',
      params: snakeCaseParams
    })

    // Make new Action objects
    const actions = []
    response.data.actions.forEach(action => actions.push(new Action(action)))

    // Return a list
    const meta = response.data.meta
    return new ActionList(this, params, meta, actions)
  }

  async get (id) {
    const response = await this.client.axios({
      url: '/actions/' + id,
      method: 'GET'
    })

    return new Action(response.data.action)
  }
}

module.exports = ActionsEndpoint
