const pkg = require('../package.json')
const axios = require('axios')

const APIError = require('./apiError')

// Base URL
const BASE_URL = 'https://api.hetzner.cloud/v1/'

// API endpoints
const ActionsEndpoint = require('./actions')
const ServersEndpoint = require('./servers')
const FloatingIPsEndpoint = require('./floatingIPs')
const SSHKeysEndpoint = require('./sshKeys')
const ServerTypesEndpoint = require('./serverTypes')
const LocationsEndpoint = require('./locations')
const DatacentersEndpoint = require('./datacenters')
const ImagesEndpoint = require('./images')
const ISOsEndpoint = require('./isos')
const NetworkEndpoint = require('./networks')
const VolumesEndpoint = require('./volumes')

class Client {
	constructor(opts) {
		opts = opts || {}

		// API-Token as an argument
		if (typeof opts === 'string') {
			opts = {
				token: opts,
			}
		}

		// Overwrite default options with user given options
		opts = Object.assign(
			{
				// API-Token (required)
				token: null,

				// Default base URL
				baseURL: BASE_URL,

				// Response timeout (5 seconds)
				timeout: 1000 * 5,

				// See "https://github.com/axios/axios#request-config" for more info
				proxy: false,
			},
			opts
		)

		// New axios instance
		this.axios = axios.create({
			baseURL: opts.baseURL,
			timeout: opts.timeout,
			proxy: opts.proxy,

			// Default headers
			headers: {
				// e.g: "hcloud-js/1.0.0"
				'User-Agent': pkg.name + '/' + pkg.version,
				Authorization: 'Bearer ' + opts.token,
			},
		})

		// Interceptor
		this.ratelimit = null
		this.axios.interceptors.response.use(
			response => {
				// Update ratelimit information after response
				this.ratelimit = {
					limit: parseInt(response.headers['ratelimit-limit']),
					remaining: parseInt(response.headers['ratelimit-remaining']),
					reset: new Date(parseInt(response.headers['ratelimit-reset']) * 1000),
				}

				return response
			},
			error => {
				let err = null
				if (error.response) {
					// The request was made but the API responded with an error
					err = new APIError(error.response.data.error)
				} else {
					// Something else happened
					err = error
				}

				return Promise.reject(err)
			}
		)

		// API endpoints
		this.actions = new ActionsEndpoint(this)
		this.servers = new ServersEndpoint(this)
		this.floatingIPs = new FloatingIPsEndpoint(this)
		this.sshKeys = new SSHKeysEndpoint(this)
		this.serverTypes = new ServerTypesEndpoint(this)
		this.locations = new LocationsEndpoint(this)
		this.datacenters = new DatacentersEndpoint(this)
		this.images = new ImagesEndpoint(this)
		this.isos = new ISOsEndpoint(this)
		this.networks = new NetworkEndpoint(this)
		this.volumes = new VolumesEndpoint(this)
	}
}

module.exports = Client
