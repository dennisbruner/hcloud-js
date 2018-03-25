class ISO {
  constructor (iso) {
    this.id = iso['id']
    this.name = iso['name']
    this.description = iso['description']
    this.type = iso['type']
    this.deprecated = iso['deprecated'] ? new Date(iso['deprecated']) : null
  }
}

module.exports = ISO
