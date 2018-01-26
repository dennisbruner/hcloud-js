const Network = require('./network')
const ServerType = require('../serverTypes/serverType')
const Datacenter = require('../datacenters/datacenter')
const Image = require('../images/image')
const ISO = require('../isos/iso')
const Traffic = require('./traffic')

// TODO: add methods
class Server {
  constructor (endpoint, server) {
    this.endpoint = endpoint

    this.id = server['id']
    this.name = server['name']
    this.status = server['status']
    this.created = new Date(server['created'])
    this.publicNet = new Network(this, server['public_net'])
    this.serverType = new ServerType(server['server_type'])
    this.datacenter = new Datacenter(server['datacenter'])
    this.image = server['image'] ? new Image(this.endpoint, server['image']) : null
    this.iso = server['iso'] ? new ISO(server['iso']) : null
    this.rescueEnabled = server['rescue_enabled']
    this.locked = server['locked']
    this.backupWindow = server['backup_window']
    this.traffic = new Traffic({
      'outgoing_traffic': server['outgoing_traffic'],
      'ingoing_traffic': server['ingoing_traffic'],
      'included_traffic': server['included_traffic']
    })
  }
}

module.exports = Server
