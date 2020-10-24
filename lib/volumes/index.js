const snakeCase = require('snake-case')
const Volume = require('./volume')
const VolumeList = require('./volumeList')
const VolumeBuilder = require('./volumeBuilder')
const VolumeActionsEndpoint = require('./actions/index')

class VolumesEndpoint {
	constructor(client) {
		this.client = client
		this.actions = new VolumeActionsEndpoint(this.client)
	}

	async list(params) {
		const snakeCaseParams = {}
		if (params) {
			Object.keys(params).forEach(key => {
				snakeCaseParams[snakeCase(key)] = params[key]
			})
		}

		const response = await this.client.axios({
			url: '/volumes',
			method: 'GET',
			params: snakeCaseParams,
		})

		// Make new Server objects
		const volumes = []
		response.data.volumes.forEach(volume =>
			volumes.push(new Volume(this, volume))
		)

		// Return a list
		const meta = response.data.meta
		return new VolumeList(this, params, meta, volumes)
	}

	async get(id) {
		const response = await this.client.axios({
			url: '/volumes/' + id,
			method: 'GET',
		})

		// Return new Server instance
		return new Volume(this, response.data.volume)
	}

	build(name) {
		return new VolumeBuilder(this, name)
	}

	async changeName(id, name) {
		const response = await this.client.axios({
			url: '/volumes/' + id,
			method: 'PUT',
			data: {
				name,
			},
		})

		return new Volume(this, response.data.volume)
	}

	async delete(id) {
		const response = await this.client.axios({
			url: '/volumes/' + id,
			method: 'DELETE',
		})

		return response
	}
}

module.exports = VolumesEndpoint
