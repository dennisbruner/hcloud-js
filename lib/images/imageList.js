const Pagination = require('../pagination')

class ImageList extends Pagination {
  constructor (endpoint, params, meta, images) {
    super(endpoint, params, meta)
    this.images = images
  }
}

module.exports = ImageList
