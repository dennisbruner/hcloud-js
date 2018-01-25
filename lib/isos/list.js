const ISO = require('./iso')
const ISOList = require('./isoList')

module.exports = function (params) {
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
