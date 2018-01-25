class Action {
  constructor (action) {
    Object.keys(action).forEach(key => {
      this[key] = action[key]
    })
  }
}

module.exports = Action
