const Pagination = require('../pagination')

class ImageList extends Pagination {
  constructor (endpoint, images, meta) {
    super(endpoint, meta)
    this.images = images
  }
}

module.exports = ImageList
