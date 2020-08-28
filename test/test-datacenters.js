require('dotenv').config()
const expect = require('chai').expect
const HetznerCloud = require('../lib')
const client = new HetznerCloud.Client(process.env.API_TOKEN)

describe('DatacentersEndpoint', function () {
  let datacentersList = null

  before(function () {
    return client.datacenters.list()
      .then(response => {
        datacentersList = response
        return response
      })
  })

  describe('#list()', function () {
    it('should return a DatacenterList', function () {
      expect(datacentersList).to.be.instanceof(HetznerCloud.DatacenterList)
    })

    it('should be an instance of Pagination', function () {
      expect(datacentersList).to.be.instanceof(HetznerCloud.Pagination)
    })

    it('should contain an array called datacenters', function () {
      expect(datacentersList).to.have.property('datacenters').and.satisfy(Array.isArray)
    })

    it('should have a page property (type: number)', function () {
      expect(datacentersList).to.have.property('page').that.is.a('number')
    })

    it('should have a perPage property (type: number)', function () {
      expect(datacentersList).to.have.property('perPage').that.is.a('number')
    })

    it('should have a previousPage property (type: number|null)', function () {
      expect(datacentersList).to.have.property('previousPage')
        .and.satisfy((val) => typeof val === 'number' || val === null)
    })

    it('should have a nextPage property (type: number|null)', function () {
      expect(datacentersList).to.have.property('nextPage')
        .and.satisfy((val) => typeof val === 'number' || val === null)
    })

    it('should have a lastPage property (type: number|null)', function () {
      expect(datacentersList).to.have.property('lastPage')
        .and.satisfy((val) => typeof val === 'number' || val === null)
    })

    it('should have a totalEntries property (type: number)', function () {
      expect(datacentersList).to.have.property('totalEntries').that.is.a('number')
    })
  })

  describe('#get()', function () {
    let datacenter = null

    before(function () {
      let datacenterID = datacentersList.datacenters[0].id
      return client.datacenters.get(datacenterID)
        .then(response => {
          datacenter = response
          return response
        })
    })

    it('should return a Datacenter', function () {
      expect(datacenter).to.be.instanceof(HetznerCloud.Datacenter)
    })

    it('should have an id property (type: number)', function () {
      expect(datacenter).to.have.property('id').that.is.a('number')
    })

    it('should have a name property (type: string)', function () {
      expect(datacenter).to.have.property('name').that.is.a('string')
    })

    it('should have a description property (type: string)', function () {
      expect(datacenter).to.have.property('description').that.is.a('string')
    })

    it('should have a location property (type: Location)', function () {
      expect(datacenter).to.have.property('location').that.is.instanceof(HetznerCloud.Location)
    })

    it('should have a serverTypes property (type: Object)', function () {
      expect(datacenter).to.have.property('serverTypes').that.is.instanceof(Object)
    })
  })
})
