require('dotenv').config()
const expect = require('chai').expect
const HetznerCloud = require('../lib')
const client = new HetznerCloud.Client(process.env.API_TOKEN)

describe('ActionsEndpoint', function () {
  let actionList = null

  before(function () {
    return client.actions.list()
      .then(response => {
        actionList = response
        return response
      })
  })

  describe('#list()', function () {
    it('should return an ActionList', function () {
      expect(actionList).to.be.instanceof(HetznerCloud.ActionList)
    })

    it('should be an instance of Pagination', function () {
      expect(actionList).to.be.instanceof(HetznerCloud.Pagination)
    })

    it('should contain an array called actions', function () {
      expect(actionList).to.have.property('actions').and.satisfy(Array.isArray)
    })

    it('should have a page property (type: number)', function () {
      expect(actionList).to.have.property('page').that.is.a('number')
    })

    it('should have a perPage property (type: number)', function () {
      expect(actionList).to.have.property('perPage').that.is.a('number')
    })

    it('should have a previousPage property (type: number|null)', function () {
      expect(actionList).to.have.property('previousPage')
        .and.satisfy((val) => typeof val === 'number' || val === null)
    })

    it('should have a nextPage property (type: number|null)', function () {
      expect(actionList).to.have.property('nextPage')
        .and.satisfy((val) => typeof val === 'number' || val === null)
    })

    it('should have a lastPage property (type: number|null)', function () {
      expect(actionList).to.have.property('lastPage')
        .and.satisfy((val) => typeof val === 'number' || val === null)
    })

    it('should have a totalEntries property (type: number)', function () {
      expect(actionList).to.have.property('totalEntries').that.is.a('number')
    })
  })

  describe('#get()', function () {
    let action = null

    before(function () {
      let actionID = actionList.actions[0].id
      return client.actions.get(actionID)
        .then(response => {
          action = response
          return response
        })
    })

    it('should return an Action', function () {
      expect(action).to.be.instanceof(HetznerCloud.Action)
    })

    it('should have an id property (type: number)', function () {
      expect(action).to.have.property('id').that.is.a('number')
    })

    it('should have a command property (type: string)', function () {
      expect(action).to.have.property('command').that.is.a('string')
    })

    it('should have a status property (type: string)', function () {
      expect(action).to.have.property('status').that.is.a('string')
    })

    it('should have a progress property (type: number)', function () {
      expect(action).to.have.property('progress').that.is.a('number')
    })

    it('should have a started property (type: Date)', function () {
      expect(action).to.have.property('started').that.is.instanceof(Date)
    })

    it('should have a finished property (type: Date|null)', function () {
      expect(action).to.have.property('finished')
        .and.satisfy((val) => val instanceof Date || val === null)
    })

    it('should contain an array called resources', function () {
      expect(action).to.have.property('resources').and.satisfy(Array.isArray)
    })

    it('should have an error property (type: Object|null)', function () {
      expect(action).to.have.property('error')
        .and.satisfy((val) => val instanceof Object || val === null)
    })
  })
})
