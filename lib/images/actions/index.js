const snakeCase = require('snake-case')
const Action = require('../../actions/action')
const ImageActionList = require('./imageActionList')

class ImageActionsEndpoint {
  constructor (client) {
    this.client = client
  }

  list (id, params) {
    let snakeCaseParams = {}
    if (params) {
      Object.keys(params).forEach(key => {
        snakeCaseParams[snakeCase(key)] = params[key]
      })
    }

    return this.client.axios({
      url: '/images/' + id + '/actions',
      method: 'GET',
      params: snakeCaseParams
    }).then(response => {
      // Make new Action objects
      let actions = []
      response.data.actions.forEach(action => {
        actions.push(new Action(action))
      })

      // Return a list
      let meta = response.data.meta
      return new ImageActionList(this, params, meta, id, actions)
    })
  }

  get (imageID, actionID) {
    return this.client.axios({
      url: '/images/' + imageID + '/actions/' + actionID,
      method: 'GET'
    }).then(response => {
      // Return new Action instance
      return new Action(response.data.action)
    })
  }

  changeProtection (id, data) {
    return this.client.axios({
      url: '/images/' + id + '/actions/change_protection',
      method: 'POST',
      data
    }).then(response => {
      return new Action(response.data.action)
    })
  }
}

module.exports = ImageActionsEndpoint
