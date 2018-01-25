const ISO = require('./iso')

module.exports = function (id) {
  return this.axios({
    url: '/isos/' + id,
    method: 'GET'
  }).then(response => {
    // Return new ISO instance
    return new ISO(response.data.iso)
  })
}
