require('dotenv').config()
const expect = require('chai').expect
const HetznerCloud = require('../lib')
const client = new HetznerCloud.Client(process.env.API_TOKEN)

describe('ServersEndpoint', function () {
  let server = null
  let network = null

  before(async function () {
    network = await client.networks.create('test-network', '10.0.0.0/16', [{ type: 'cloud', ip_range: '10.0.0.0/16', network_zone: 'eu-central' }])
  })

  after(async function () {
    await client.networks.delete(network.id)
  })

  describe('#build()', function () {
    it('should create server attached to network', async function () {
      const response = await client.servers.build('test-server')
        .serverType('cx11')
        .location('hel1')
        .image('ubuntu-20.04')
        .startAfterCreate(true)
        .network(network)
        .create()
      server = response.server
      expect(response.server.status).to.equal('initializing')
    })
  })

  describe('#delete()', function () {
    it('should delete server', async function () {
      const response = await client.servers.delete(server.id)
      expect(response.status).to.equal('success')
    })
  })
})
