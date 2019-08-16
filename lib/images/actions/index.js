const snakeCase = require('snake-case')
const Action = require('../../actions/action')
const ImageActionList = require('./imageActionList')

class ImageActionsEndpoint {
  constructor (client) {
    this.client = client
  }

  async list (id, params) {
    let snakeCaseParams = {}
    if (params) {
      Object.keys(params).forEach(key => {
        snakeCaseParams[snakeCase(key)] = params[key]
      })
    }

    let response = await this.client.axios({
      url: '/images/' + id + '/actions',
      method: 'GET',
      params: snakeCaseParams
    })

    // Make new Action objects
    let actions = []
    response.data.actions.forEach(action => actions.push(new Action(action)))

    // Return a list
    let meta = response.data.meta
    return new ImageActionList(this, params, meta, id, actions)
  }

  async get (imageID, actionID) {
    let response = await this.client.axios({
      url: '/images/' + imageID + '/actions/' + actionID,
      method: 'GET'
    })

    // Return new Action instance
    return new Action(response.data.action)
  }

  async changeProtection (id, data) {
    let response = await this.client.axios({
      url: '/images/' + id + '/actions/change_protection',
      method: 'POST',
      data
    })

    return new Action(response.data.action)
  }
}

module.exports = ImageActionsEndpoint
