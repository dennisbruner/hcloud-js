const snakeCase = require('snake-case')
const Image = require('./image')
const ImageList = require('./imageList')

class ImagesEndpoint {
  constructor (client) {
    this.client = client
  }

  list (params) {
    let snakeCaseParams = {}
    if (params) {
      Object.keys(params).forEach(key => {
        snakeCaseParams[snakeCase(key)] = params[key]
      })
    }
  
    return this.client.axios({
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

  get (id) {
    return this.client.axios({
      url: '/images/' + id,
      method: 'GET'
    }).then(response => {
      // Return new Image instance
      return new Image(this, response.data.image)
    })
  }

  update (id, description, type = 'snapshot') {
    return this.client.axios({
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

  delete (id) {
    return this.client.axios({
      url: '/images/' + id,
      method: 'DELETE'
    }).then(() => null)
  }
}

module.exports = ImagesEndpoint
