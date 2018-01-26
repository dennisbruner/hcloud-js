const camelCase = require('camelcase')

class ISO {
  constructor (iso) {
    Object.keys(iso).forEach(key => {
      this[camelCase(key)] = iso[key]
    })
  }
}

module.exports = ISO
