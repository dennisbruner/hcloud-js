const PublicNetwork = require('./publicNetwork')
const ServerType = require('../serverTypes/serverType')
const Datacenter = require('../datacenters/datacenter')
const Image = require('../images/image')
const ISO = require('../isos/iso')
const Traffic = require('./traffic')

class Server {
  constructor (endpoint, server) {
    this.endpoint = endpoint

    this.id = server['id']
    this.name = server['name']
    this.status = server['status']
    this.created = new Date(server['created'])
    this.publicNet = new PublicNetwork(this, server['public_net'])
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
    this.rootPassword = ('root_password' in server) ? server['root_password'] : null
  }

  changeName (name) {
    return this.endpoint.changeName(this.id, name)
  }

  delete () {
    return this.endpoint.delete(this.id)
  }

  getActions (params) {
    return this.endpoint.actions.list(this.id, params)
  }

  getAction (id) {
    return this.endpoint.actions.get(this.id, id)
  }

  powerOn () {
    return this.endpoint.actions.powerOn(this.id)
  }

  powerOff () {
    return this.endpoint.actions.powerOff(this.id)
  }

  reboot () {
    return this.endpoint.actions.reboot(this.id)
  }

  reset () {
    return this.endpoint.actions.reset(this.id)
  }

  shutdown () {
    return this.endpoint.actions.shutdown(this.id)
  }

  resetPassword () {
    return this.endpoint.actions.resetPassword(this.id)
  }

  enableRescue (type, sshKeys) {
    return this.endpoint.actions.enableRescue(this.id, type, sshKeys)
  }

  disableRescue () {
    return this.endpoint.actions.disableRescue(this.id)
  }

  createImage (type, description) {
    return this.endpoint.actions.createImage(this.id, type, description)
  }

  rebuild (image) {
    return this.endpoint.actions.rebuild(this.id, image)
  }

  changeType (serverType, upgradeDisk) {
    return this.endpoint.actions.changeType(this.id, serverType, upgradeDisk)
  }

  enableBackup (backupWindow) {
    return this.endpoint.actions.enableBackup(this.id, backupWindow)
  }

  disableBackup () {
    return this.endpoint.actions.disableBackup(this.id)
  }

  attachISO (iso) {
    return this.endpoint.actions.attachISO(this.id, iso)
  }

  detachISO () {
    return this.endpoint.actions.detachISO(this.id)
  }

  requestConsole () {
    return this.endpoint.actions.requestConsole(this.id)
  }
}

module.exports = Server
