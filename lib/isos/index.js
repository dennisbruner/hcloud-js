const ISO = require('./iso')
const ISOList = require('./isoList')

function list (params) {
  return this.axios({
    url: '/isos',
    method: 'GET',
    params
  }).then(response => {
    // Make new ISO objects
    let isos = []
    response.data.isos.forEach(iso => {
      isos.push(new ISO(iso))
    })

    // Return a list
    return new ISOList(this, isos, response.data.meta)
  })
}

function get (id) {
  return this.axios({
    url: '/isos/' + id,
    method: 'GET'
  }).then(response => {
    // Return new ISO instance
    return new ISO(response.data.iso)
  })
}

module.exports = {
  list,
  get
}
