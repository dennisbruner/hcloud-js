const snakeCase = require('snake-case')
const Image = require('./image')
const ImageList = require('./imageList')

function list (params) {
  let snakeCaseParams = {}
  if (params) {
    Object.keys(params).forEach(key => {
      snakeCaseParams[snakeCase(key)] = params[key]
    })
  }

  return this.axios({
    url: '/images',
    method: 'GET',
    params: snakeCaseParams
  }).then(response => {
    // Make new Image objects
    let images = []
    response.data.images.forEach(image => {
      images.push(new Image(this, image))
    })

    // Return a list
    return new ImageList(this, images, response.data.meta)
  })
}

function get (id) {
  return this.axios({
    url: '/images/' + id,
    method: 'GET'
  }).then(response => {
    // Return new Image instance
    return new Image(this, response.data.image)
  })
}

function update (id, description, type = 'snapshot') {
  return this.axios({
    url: '/images/' + id,
    method: 'PUT',
    data: {
      description,
      type
    }
  }).then(response => {
    // Return new Image instance
    return new Image(this, response.data.image)
  })
}

function deleteImage (id) {
  return this.axios({
    url: '/images/' + id,
    method: 'DELETE'
  }).then(() => null)
}

module.exports = {
  list,
  get,
  update,
  delete: deleteImage // delete is a reserved JavasScript keyword
}
