const pkg = require('../package.json')
const axios = require('axios')

// Base URL
const BASE_URL = 'https://api.hetzner.cloud/v1/'

// API calls
const actions = require('./actions')
const servers = require('./servers')
const sshKeys = require('./sshKeys')
const serverTypes = require('./serverTypes')
const locations = require('./locations')
const datacenters = require('./datacenters')
const images = require('./images')
const isos = require('./isos')

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
    this.servers = {
      list: servers.list.bind(this),
      get: servers.get.bind(this)
    }
    this.sshKeys = {
      list: sshKeys.list.bind(this),
      get: sshKeys.get.bind(this),
      create: sshKeys.create.bind(this),
      changeName: sshKeys.changeName.bind(this),
      delete: sshKeys.delete.bind(this)
    }
    this.serverTypes = {
      list: serverTypes.list.bind(this),
      get: serverTypes.get.bind(this)
    }
    this.locations = {
      list: locations.list.bind(this),
      get: locations.get.bind(this)
    }
    this.datacenters = {
      list: datacenters.list.bind(this),
      get: datacenters.get.bind(this)
    }
    this.images = {
      list: images.list.bind(this),
      get: images.get.bind(this),
      update: images.update.bind(this),
      delete: images.delete.bind(this)
    }
    this.isos = {
      list: isos.list.bind(this),
      get: isos.get.bind(this)
    }
  }
}

module.exports = Client
