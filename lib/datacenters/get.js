const Datacenter = require('./datacenter')

module.exports = function (id) {
  return this.axios({
    url: '/datacenters/' + id,
    method: 'GET'
  }).then(response => {
    // Return new Datacenter instance
    return new Datacenter(response.data.datacenter)
  })
}
