const Action = require('./action')

module.exports = function (id) {
  return this.axios({
    url: '/actions/' + id,
    method: 'GET'
  }).then(response => {
    // Return new Action instance
    return new Action(response.data.action)
  })
}
