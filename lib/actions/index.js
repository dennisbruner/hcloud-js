const Action = require('./action')
const ActionList = require('./ActionList')

function list (params) {
  return this.axios({
    url: '/actions',
    method: 'GET',
    params
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

function get (id) {
  return this.axios({
    url: '/actions/' + id,
    method: 'GET'
  }).then(response => {
    // Return new Action instance
    return new Action(response.data.action)
  })
}

module.exports = {
  list,
  get
}
