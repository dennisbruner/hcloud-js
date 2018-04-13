class Image {
  constructor (endpoint, image) {
    this.endpoint = endpoint

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
    this.deprecated = image['deprecated'] ? new Date(image['deprecated']) : null
    this.protection = image['protection']
  }

  update (description, type) {
    return this.endpoint.update(this.id, description, type)
  }

  delete () {
    return this.endpoint.delete(this.id)
  }

  changeProtection (data) {
    return this.endpoint.actions.changeProtection(this.id, data)
  }
}

module.exports = Image
