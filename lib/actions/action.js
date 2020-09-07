class Action {
  constructor (action) {
    this.id = action.id
    this.command = action.command
    this.status = action.status
    this.progress = action.progress
    this.started = new Date(action.started)
    this.finished = new Date(action.finished)
    this.resources = action.resources
    if ('error' in action) this.error = action.error
  }
}

module.exports = Action
