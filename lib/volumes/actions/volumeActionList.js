const Pagination = require('../../pagination')

class VolumeActionList extends Pagination {
	constructor(endpoint, params, meta, id, actions) {
		super(endpoint, params, meta)
		this.id = id
		this.actions = actions
	}
}

module.exports = VolumeActionList
