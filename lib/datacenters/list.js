const Datacenter = require('./datacenter')
const DatacenterList = require('./datacenterList')

module.exports = function (params) {
  return this.axios({
    url: '/datacenters',
    method: 'GET',
    params
  }).then(response => {
    // Make new Datacenter objects
    let datacenters = []
    response.data.datacenters.forEach(datacenter => {
      datacenters.push(new Datacenter(datacenter))
    })

    // Return a list
    return new DatacenterList(this, datacenters, response.data.meta)
  })
}
