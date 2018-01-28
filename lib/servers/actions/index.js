const snakeCase = require('snake-case')
const Action = require('../../actions/action')
const ServerActionList = require('./serverActionList')
const SSHKey = require('../../sshKeys/sshKey')
const Image = require('../../images/image')
const ServerType = require('../../serverTypes/serverType')

class ServerActionsEndpoint {
  constructor (client) {
    this.client = client
  }

  list (id, params) {
    let snakeCaseParams = {}
    if (params) {
      Object.keys(params).forEach(key => {
        snakeCaseParams[snakeCase(key)] = params[key]
      })
    }

    return this.client.axios({
      url: '/servers/' + id + '/actions',
      method: 'GET',
      params: snakeCaseParams
    }).then(response => {
      // Make new Action objects
      let actions = []
      response.data.actions.forEach(action => {
        actions.push(new Action(action))
      })

      // Return a list
      return new ServerActionList(this, id, actions, response.data.meta)
    })
  }

  get (serverID, actionID) {
    return this.client.axios({
      url: '/servers/' + serverID + '/actions/' + actionID,
      method: 'GET'
    }).then(response => {
      // Return new Action instance
      return new Action(response.data.action)
    })
  }

  powerOn (id) {
    return this.client.axios({
      url: '/servers/' + id + '/actions/poweron',
      method: 'POST'
    }).then(response => {
      return new Action(response.data.action)
    })
  }

  powerOff (id) {
    return this.client.axios({
      url: '/servers/' + id + '/actions/poweroff',
      method: 'POST'
    }).then(response => {
      return new Action(response.data.action)
    })
  }

  reboot (id) {
    return this.client.axios({
      url: '/servers/' + id + '/actions/reboot',
      method: 'POST'
    }).then(response => {
      return new Action(response.data.action)
    })
  }

  reset (id) {
    return this.client.axios({
      url: '/servers/' + id + '/actions/reset',
      method: 'POST'
    }).then(response => {
      return new Action(response.data.action)
    })
  }

  shutdown (id) {
    return this.client.axios({
      url: '/servers/' + id + '/actions/shutdown',
      method: 'POST'
    }).then(response => {
      return new Action(response.data.action)
    })
  }

  resetPassword (id) {
    return this.client.axios({
      url: '/servers/' + id + '/actions/reset_password',
      method: 'POST'
    }).then(response => {
      return {
        rootPassword: response.data['root_password'],
        action: new Action(response.data.action)
      }
    })
  }

  enableRescue (id, type = 'linux64', sshKeys = []) {
    let sshKeyIDs = []
    for (let i = 0; i < sshKeys.length; i++) {
      if (sshKeys[i] instanceof SSHKey) {
        sshKeyIDs.push(sshKeys[i].id)
      } else {
        sshKeyIDs.push(sshKeys[i])
      }
    }

    return this.client.axios({
      url: '/servers/' + id + '/actions/enable_rescue',
      method: 'POST',
      data: {
        type,
        'ssh_keys': sshKeyIDs
      }
    }).then(response => {
      return {
        rootPassword: response.data['root_password'],
        action: new Action(response.data.action)
      }
    })
  }

  disableRescue (id) {
    return this.client.axios({
      url: '/servers/' + id + '/actions/disable_rescue',
      method: 'POST'
    }).then(response => {
      return new Action(response.data.action)
    })
  }

  createImage (id, type = 'snapshot', description) {
    return this.client.axios({
      url: '/servers/' + id + '/actions/create_image',
      method: 'POST',
      data: {
        type,
        description
      }
    }).then(response => {
      return {
        image: new Image(this.client.images, response.data.image),
        action: new Action(response.data.action)
      }
    })
  }

  rebuild (id, image) {
    let imageID = image
    if (image instanceof Image) {
      imageID = image.id
    }

    return this.client.axios({
      url: '/servers/' + id + '/actions/rebuild',
      method: 'POST',
      data: {
        image: imageID
      }
    }).then(response => {
      return {
        rootPassword: response.data['root_password'],
        action: new Action(response.data.action)
      }
    })
  }

  changeType (id, serverType, upgradeDisk = true) {
    let serverTypeID = serverType
    if (serverType instanceof ServerType) {
      serverTypeID = serverType.id
    }

    return this.client.axios({
      url: '/servers/' + id + '/actions/change_type',
      method: 'POST',
      data: {
        'server_type': serverTypeID,
        'upgrade_disk': upgradeDisk
      }
    }).then(response => {
      return new Action(response.data.action)
    })
  }

  enableBackup (id, backupWindow) {
    return this.client.axios({
      url: '/servers/' + id + '/actions/enable_backup',
      method: 'POST',
      data: {
        'backup_window': backupWindow
      }
    }).then(response => {
      return new Action(response.data.action)
    })
  }

  disableBackup (id) {
    return this.client.axios({
      url: '/servers/' + id + '/actions/disable_backup',
      method: 'POST'
    }).then(response => {
      return new Action(response.data.action)
    })
  }

  changeDnsPointer (id, ip, pointer = null) {
    return this.client.axios({
      url: '/servers/' + id + '/actions/change_dns_ptr',
      method: 'POST',
      data: {
        ip,
        'dns_ptr': pointer
      }
    }).then(response => {
      return new Action(response.data.action)
    })
  }
}

module.exports = ServerActionsEndpoint
