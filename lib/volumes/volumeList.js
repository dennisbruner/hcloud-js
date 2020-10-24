const Pagination = require('../pagination')

class VolumeList extends Pagination {
	constructor(endpoint, params, meta, volumes) {
		super(endpoint, params, meta)
		this.volumes = volumes
	}
}

module.exports = VolumeList
