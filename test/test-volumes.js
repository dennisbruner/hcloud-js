require('dotenv').config()
const expect = require('chai').expect
const HetznerCloud = require('../lib')
const client = new HetznerCloud.Client(process.env.API_TOKEN)

describe('VolumesEndpoint', function () {
	let server = null
	let volume = null

	before(async function () {
		server = await client.servers
			.build('test-server')
			.serverType('cx11')
			.location('hel1')
			.image('ubuntu-20.04')
			.create()
	})

	after(async function () {
		await client.servers.delete(server.id)
	})

	describe('#build()', function () {
		it('should create volume attached to server', async function () {
			const response = await client.volumes
				.build('test_vol')
				.size(10)
				.server(server)
				.create()
			volume = response.volume
			expect(response.volume.status).to.equal('creating')
		})
	})

	describe('#detach()', function () {
		it('should detach volume from server', async function () {
			const response = await volume.detach()

			expect(response.status).to.be.oneOf(['success', 'running'])
		})
	})

	describe('#delete()', function () {
		it('should delete volume', async function () {
			const response = await client.volumes
			expect(response.status).to.equal('success')
		})
	})
})
