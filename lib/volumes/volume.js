class Volume {
	constructor(endpoint, volume) {
		this.endpoint = endpoint

		this.id = volume.id
		this.name = volume.name
		this.status = volume.status
		this.created = new Date(volume.created)
		this.server = volume.server
		this.size = volume.size
		this.linux_device = volume.linux_device
		this.format = volume.format
		this.protection = volume.protection
	}

	changeName(name) {
		return this.endpoint.changeName(this.id, name)
	}

	delete() {
		return this.endpoint.delete(this.id)
	}

	getActions(params) {
		return this.endpoint.actions.list(this.size, params)
	}

	getAction(id) {
		return this.endpoint.actions.get(this.id, id)
	}

	attach(server, automount) {
		return this.endpoint.actions.attach(this.id, server, automount)
	}

	detach() {
		return this.endpoint.actions.detach(this.id)
	}

	resize(size) {
		return this.endpoint.actions.resize(this.id, size)
	}

	changeProtection(protection) {
		return this.endpoint.actions.changeProtection(this.id, protection)
	}
}

module.exports = Volume
