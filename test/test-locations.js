require('dotenv').config()
const expect = require('chai').expect
const HetznerCloud = require('../lib')
const client = new HetznerCloud.Client(process.env.API_TOKEN)

describe('LocationsEndpoint', function () {
  let locationsList = null

  before(function () {
    return client.locations.list()
      .then(response => {
        locationsList = response
        return response
      })
  })

  describe('#list()', function () {
    it('should return a LocationList', function () {
      expect(locationsList).to.be.instanceof(HetznerCloud.LocationList)
    })

    it('should be an instance of Pagination', function () {
      expect(locationsList).to.be.instanceof(HetznerCloud.Pagination)
    })

    it('should contain an array called locations', function () {
      expect(locationsList).to.have.property('locations').and.satisfy(Array.isArray)
    })

    it('should have a page property (type: number)', function () {
      expect(locationsList).to.have.property('page').that.is.a('number')
    })

    it('should have a perPage property (type: number)', function () {
      expect(locationsList).to.have.property('perPage').that.is.a('number')
    })

    it('should have a previousPage property (type: number|null)', function () {
      expect(locationsList).to.have.property('previousPage')
        .and.satisfy((val) => typeof val === 'number' || val === null)
    })

    it('should have a nextPage property (type: number|null)', function () {
      expect(locationsList).to.have.property('nextPage')
        .and.satisfy((val) => typeof val === 'number' || val === null)
    })

    it('should have a lastPage property (type: number|null)', function () {
      expect(locationsList).to.have.property('lastPage')
        .and.satisfy((val) => typeof val === 'number' || val === null)
    })

    it('should have a totalEntries property (type: number)', function () {
      expect(locationsList).to.have.property('totalEntries').that.is.a('number')
    })
  })

  describe('#get()', function () {
    let location = null

    before(function () {
      let locationID = locationsList.locations[0].id
      return client.locations.get(locationID)
        .then(response => {
          location = response
          return response
        })
    })

    it('should return a Location', function () {
      expect(location).to.be.instanceof(HetznerCloud.Location)
    })

    it('should have an id property (type: number)', function () {
      expect(location).to.have.property('id').that.is.a('number')
    })

    it('should have a name property (type: string)', function () {
      expect(location).to.have.property('name').that.is.a('string')
    })

    it('should have a description property (type: string)', function () {
      expect(location).to.have.property('description').that.is.a('string')
    })

    it('should have a country property (type: string)', function () {
      expect(location).to.have.property('country').that.is.a('string')
    })

    it('should have a city property (type: string)', function () {
      expect(location).to.have.property('city').that.is.a('string')
    })

    it('should have a latitude property (type: number)', function () {
      expect(location).to.have.property('latitude').that.is.a('number')
    })

    it('should have a longitude property (type: number)', function () {
      expect(location).to.have.property('longitude').that.is.a('number')
    })
  })
})
