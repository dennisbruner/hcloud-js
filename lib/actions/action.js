const camelCase = require('camelcase')

class Action {
  constructor (action) {
    Object.keys(action).forEach(key => {
      this[camelCase(key)] = action[key]
    })
  }
}

module.exports = Action
