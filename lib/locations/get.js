const Location = require('./location')

module.exports = function (id) {
  return this.axios({
    url: '/locations/' + id,
    method: 'GET'
  }).then(response => {
    // Return new Location instance
    return new Location(response.data.location)
  })
}
