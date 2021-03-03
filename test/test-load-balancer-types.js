require('dotenv').config()
const expect = require('chai').expect
const HetznerCloud = require('../lib')
const client = new HetznerCloud.Client(process.env.API_TOKEN)

describe('LoadBalancerTypesEndpoint', function () {
  describe('#list()', function () {
    it('should return array', async function () {
      const types = await client.loadBalancerTypes.list()
      expect(types).to.be.instanceOf(HetznerCloud.LoadBalancerTypeList)
    })
  })

  describe('#get()', function () {
    let loadBalancerType = null
    it('should return load balancer type', async function () {
      loadBalancerType = await client.loadBalancerTypes.get(1)
      expect(loadBalancerType).to.be.instanceOf(HetznerCloud.LoadBalancerType)
    })
    it('should have name of lb11', async function () {
      expect(loadBalancerType).to.be.instanceOf(HetznerCloud.LoadBalancerType)
    })
    it('should have prices', function () {
      expect(loadBalancerType).to.have.property('prices').and.satisfy(Array.isArray)
    })
  })
})
