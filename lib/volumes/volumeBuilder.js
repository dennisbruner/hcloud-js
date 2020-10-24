const Server = require('../servers/server')
const Volume = require('./volume')
const Location = require('../locations/location')
const Action = require('../actions/action')

class VolumeBuilder {
	constructor(endpoint, name) {
		this.endpoint = endpoint

		this._name = name
		this._size = undefined
		this._automount = false
		this._format = undefined
		this._location = undefined
		this._server = undefined
		this._labels = {}
	}

	create() {
		if (!this._size) return Promise.reject(new Error('A size is required'))

		const data = {
			size: this._size,
			name: this._name,
			labels: this._labels,
			automount: this._automount,
			format: this._format,
			location: this._location,
			server: this._server,
		}

		return this.endpoint.client
			.axios({
				url: '/volumes',
				method: 'POST',
				data,
			})
			.then(response => {
				// Return new Server and Action instance
				return {
					volume: new Volume(this.endpoint, response.data.volume),
					action: new Action(response.data.action),
				}
			})
	}

	name(name) {
		this._name = name

		return this
	}

	size(size) {
		this._size = size

		return this
	}

	location(location) {
		// You can pass a Location class instance
		if (location instanceof Location) {
			this._location = location.id
		} else {
			this._location = location
		}

		return this
	}

	format(format) {
		this._format = format

		return this
	}

	labels(labels) {
		this._labels = labels

		return this
	}

	server(server) {
		console.log(server)
		// You can pass a Server class instance
		if (server instanceof Server) {
			this._server = server.id
		} else {
			this._server = server
		}

		return this
	}
}

module.exports = VolumeBuilder
