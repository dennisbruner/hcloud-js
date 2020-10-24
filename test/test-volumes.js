require('dotenv').config()
const expect = require('chai').expect
const HetznerCloud = require('../lib')
const client = new HetznerCloud.Client(process.env.API_TOKEN)

describe('VolumesEndpoint', function () {
	let test_server = null
	let volume = null

	before(async function () {
		const { server } = await client.servers
			.build('test-server')
			.serverType('cx11')
			.location('nbg1')
			.image('ubuntu-20.04')
			.create()

		test_server = server
	})

	after(async function () {
		await client.servers.delete(test_server.id)
	})

	describe('#build()', function () {
		it('should create a volume', async function () {
			const response = await client.volumes
				.build('test_vol')
				.size(10)
				.server(test_server.id)
				.create()
			volume = response.volume
			expect(response.volume.status).to.equal('creating')
		})
	})

	describe('#detach()', function () {
		it('should detach volume from server', async function () {
			const response = await volume.detach()

			expect(response.action.status).to.be.oneOf(['success', 'running'])
		})
	})

	describe('#delete()', function () {
		it('should delete volume', async function () {
			const response = await volume.delete()

			expect(response.status).to.equal(204)
		})
	})
})
