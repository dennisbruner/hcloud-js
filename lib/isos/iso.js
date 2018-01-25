class ISO {
  constructor (iso) {
    Object.keys(iso).forEach(key => {
      this[key] = iso[key]
    })
  }
}

module.exports = ISO
