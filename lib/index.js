module.exports = {
  Client: require('./client'),

  // This class will be extended by response classes
  Pagination: require('./pagination'),

  // Response classes
  Action: require('./actions/action'),
  ActionList: require('./actions/actionList'),
  Location: require('./locations/location'),
  LocationList: require('./locations/locationList'),
  ISO: require('./isos/iso'),
  ISOList: require('./isos/isoList')
}
