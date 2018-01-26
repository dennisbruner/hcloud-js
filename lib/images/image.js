class Image {
  constructor (client, image) {
    this.client = client

    this.id = image['id']
    this.type = image['type']
    this.status = image['status']
    this.name = image['name']
    this.description = image['description']
    this.imageSize = image['image_size']
    this.diskSize = image['disk_size']
    this.created = new Date(image['created'])
    this.createdFrom = image['created_from']
    this.boundTo = image['bound_to']
    this.osFlavor = image['os_flavor']
    this.osVersion = image['os_version']
    this.rapidDeploy = image['rapid_deploy']
  }

  update (description, type = 'snapshot') {
    return this.client.images.update(this.id, description, type)
      .then(image => {
        this.description = image['description']
        this.type = image['type']
      })
  }

  delete () {
    return this.client.images.delete(this.id)
  }
}

module.exports = Image
