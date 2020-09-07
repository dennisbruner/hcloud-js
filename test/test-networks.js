require('dotenv').config()
const expect = require('chai').expect
const HetznerCloud = require('../lib')
const client = new HetznerCloud.Client(process.env.API_TOKEN)

describe('NetworksEndpoint', function () {
  let network = null
  describe('#create()', function () {
    it('should create and return a working Network', async function () {
      const subnets = [{ type: 'cloud', ip_range: '10.0.0.0/16', network_zone: 'eu-central' }]
      const routes = [{ destination: '10.100.1.0/24', gateway: '10.0.1.1' }]
      network = await client.networks.create('test-network', '10.0.0.0/16', subnets, routes)
      expect(network).to.be.instanceof(HetznerCloud.Network)
    })
  })
  describe('#get()', function () {
    it('should return working network', async function () {
      const response = await client.networks.get(network.id)
      expect(response.id).to.equal(network.id)
      expect(response.subnets).satisfy(Array.isArray)
    })
  })
  describe('#update()', function () {
    it('should rename network', async function () {
      const response = await client.networks.update(network.id, 'updated-test-network')
      expect(response.name).to.equal('updated-test-network')
      expect(response.subnets).satisfy(Array.isArray)
    })
  })
  describe('#delete()', function () {
    it('should delete the network', async function () {
      await client.networks.delete(network.id)
    })
  })
})
describe('NetworkActionsEndpoint', function () {
  let network = null
  before(async function () {
    network = await client.networks.create('test-network', '10.0.0.0/16')
  })
  after(async function () {
    await client.networks.delete(network.id)
  })
  describe('#addSubnet()', function () {
    it('should add subnet', async function () {
      const response = await client.networks.actions.addSubnet(network.id, 'cloud', '10.0.1.0/24')
      expect(response.status).to.equal('success')
    })
  })
  describe('#deleteSubnet()', function () {
    it('should delete subnet', async function () {
      const response = await client.networks.actions.deleteSubnet(network.id, '10.0.1.0/24')
      expect(response.status).to.equal('success')
    })
  })
  describe('#addRoute()', function () {
    it('should add route', async function () {
      const response = await client.networks.actions.addRoute(network.id, '10.100.1.0/24', '10.0.1.1')
      expect(response.status).to.equal('success')
    })
  })
  describe('#deleteRoute()', function () {
    it('should delete subnet', async function () {
      const response = await client.networks.actions.deleteRoute(network.id, '10.100.1.0/24', '10.0.1.1')
      expect(response.status).to.equal('success')
    })
  })
  describe('#changeIPRange()', function () {
    it('should change ip range', async function () {
      const response = await client.networks.actions.changeIPRange(network.id, '10.0.0.0/12')
      expect(response.status).to.equal('success')
    })
  })
  describe('#changeNetworkProtection()', function () {
    it('should change network protection to true', async function () {
      const response = await client.networks.actions.changeNetworkProtection(network.id, true)
      expect(response.status).to.equal('success')
    })
    it('should change network protection to false', async function () {
      const response = await client.networks.actions.changeNetworkProtection(network.id, false)
      expect(response.status).to.equal('success')
    })
  })
})
