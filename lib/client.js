const pkg = require('../package.json')
const axios = require('axios')

// Base URL
const BASE_URL = 'https://api.hetzner.cloud/v1/'

// API calls
const actions = require('./actions')
const locations = require('./locations')

class Client {
  constructor (opts) {
    opts = opts || {}

    // API-Token as an argument
    if (typeof opts === 'string') {
      opts = {
        token: opts
      }
    }

    // Overwrite default options with user given options
    opts = Object.assign({
      // API-Token (required)
      token: null,

      // Default base URL
      baseURL: BASE_URL,

      // Response timeout (5 seconds)
      timeout: 1000 * 5,

      // See "https://github.com/axios/axios#request-config" for more info
      proxy: false
    }, opts)

    // New axios instance
    this.axios = axios.create({
      baseURL: opts.baseURL,
      timeout: opts.timeout,
      proxy: opts.proxy,

      // Default headers
      headers: {
        // e.g: "hcloud-js/1.0.0"
        'User-Agent': pkg.name + '/' + pkg.version,
        'Authorization': 'Bearer ' + opts.token
      }
    })

    // API calls
    this.actions = {
      list: actions.list.bind(this),
      get: actions.get.bind(this)
    }
    this.locations = {
      list: locations.list.bind(this),
      get: locations.get.bind(this)
    }
  }
}

module.exports = Client
