const { snakeCase } = require('snake-case')
const Image = require('./image')
const ImageList = require('./imageList')
const ImageActionsEndpoint = require('./actions')

class ImagesEndpoint {
  constructor (client) {
    this.client = client
    this.actions = new ImageActionsEndpoint(this.client)
  }

  async list (params) {
    const snakeCaseParams = {}
    if (params) {
      Object.keys(params).forEach(key => {
        snakeCaseParams[snakeCase(key)] = params[key]
      })
    }

    const response = await this.client.axios({
      url: '/images',
      method: 'GET',
      params: snakeCaseParams
    })

    // Make new Image objects
    const images = []
    response.data.images.forEach(image => images.push(new Image(this, image)))

    // Return a list
    const meta = response.data.meta
    return new ImageList(this, params, meta, images)
  }

  async get (id) {
    const response = await this.client.axios({
      url: '/images/' + id,
      method: 'GET'
    })

    // Return new Image instance
    return new Image(this, response.data.image)
  }

  async update (id, description, type) {
    const response = await this.client.axios({
      url: '/images/' + id,
      method: 'PUT',
      data: {
        description,
        type
      }
    })

    // Return new Image instance
    return new Image(this, response.data.image)
  }

  async delete (id) {
    await this.client.axios({
      url: '/images/' + id,
      method: 'DELETE'
    })
  }
}

module.exports = ImagesEndpoint
