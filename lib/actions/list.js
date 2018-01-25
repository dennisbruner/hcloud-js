const Action = require('./action')
const ActionList = require('./actionList')

module.exports = function () {
  return this.axios({
    url: '/actions',
    method: 'GET'
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
