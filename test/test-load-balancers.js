require('dotenv').config()
const expect = require('chai').expect
const HetznerCloud = require('../lib')
const client = new HetznerCloud.Client(process.env.API_TOKEN)

describe('LoadBalancerEndpoint', function () {
  let loadBalancer = null

  describe('#list()', function () {
    let loadBalancers = null

    it('should be instance of LoadBalancerList', async function () {
      loadBalancers = await client.loadBalancers.list()
      expect(loadBalancers).to.be.instanceOf(HetznerCloud.LoadBalancerList)
    })

    it('should return an empty array', function () {
      expect(loadBalancers.load_balancers).to.have.lengthOf(0)
    })
  })

  describe('#create()', function () {
    it('should be created', async function () {
      loadBalancer = await client.loadBalancers.create(
        'Web Frontend',
        'lb11',
        {
          type: 'round_robin'
        },
        undefined,
        undefined,
        undefined,
        false,
        undefined,
        undefined,
        'hel1'
      )
      expect(loadBalancer).to.be.instanceOf(HetznerCloud.LoadBalancer)
      expect(loadBalancer.name).to.equal('Web Frontend')
    })
  })

  describe('#get()', function () {
    it('should return a load balancer', async function () {
      const response = await client.loadBalancers.get(loadBalancer.id)
      expect(response).to.be.instanceOf(HetznerCloud.LoadBalancer)
    })
  })

  describe('#delete()', function () {
    it('should delete the load balancer', async function () {
      await client.loadBalancers.delete(loadBalancer.id)
    })
  })
})
