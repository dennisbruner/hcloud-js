const snakeCase = require('snake-case')
const Action = require('../../actions/action')
const VolumeActionList = require('./volumeActionList')
const Server = require('../../servers/server')

class VolumeActionsEndpoint {
	constructor(client) {
		this.client = client
	}

	async list(id, params) {
		const snakeCaseParams = {}
		if (params) {
			Object.keys(params).forEach(key => {
				snakeCaseParams[snakeCase(key)] = params[key]
			})
		}

		const response = await this.client.axios({
			url: '/volumes/' + id + '/actions',
			method: 'GET',
			params: snakeCaseParams,
		})

		// Make new Action objects
		const actions = []
		response.data.actions.forEach(action => actions.push(new Action(action)))

		// Return a list
		const meta = response.data.meta
		return new VolumeActionList(this, params, meta, id, actions)
	}

	async get(volumeId, actionID) {
		const response = await this.client.axios({
			url: '/volumes/' + volumeId + '/actions/' + actionID,
			method: 'GET',
		})

		// Return new Action instance
		return new Action(response.data.action)
	}

	async attach(volumeId, server, automount) {
		let serverId
		server instanceof Server ? (serverId = server.id) : (serverId = server)

		const response = await this.client.axios({
			url: '/volumes/' + volumeId + '/actions/attach',
			method: 'POST',
			data: {
				server: serverId,
				automount: automount,
			},
		})

		// Return new Action instance
		return new Action(response.data.action)
	}

	async detach(volumeId) {
		const response = await this.client.axios({
			url: '/volumes/' + volumeId + '/actions/detach',
			method: 'POST',
		})

		// Return new Action instance
		return new Action(response.data.action)
	}

	async resize(volumeId, size) {
		const response = await this.client.axios({
			url: '/volumes/' + volumeId + '/actions/resize',
			method: 'POST',
			data: {
				size: size,
			},
		})

		// Return new Action instance
		return new Action(response.data.action)
	}

	async changeProtection(volumeId, protection) {
		const response = await this.client.axios({
			url: '/volumes/' + volumeId + '/actions/change_protection',
			method: 'POST',
			data: {
				delete: protection,
			},
		})

		// Return new Action instance
		return new Action(response.data.action)
	}
}

module.exports = VolumeActionsEndpoint
