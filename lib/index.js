module.exports = {
  Client: require('./client'),

  // API error
  APIError: require('./apiError'),

  // This class will be extended by response classes
  Pagination: require('./pagination'),

  // Response classes
  Action: require('./actions/action'),
  ActionList: require('./actions/actionList'),

  Server: require('./servers/server'),
  ServerList: require('./servers/serverList'),
  ServerBuilder: require('./servers/serverBuilder'),
  ServerActionList: require('./servers/actions/serverActionList'),

  FloatingIP: require('./floatingIPs/floatingIP'),
  FloatingIPList: require('./floatingIPs/floatingIPList'),
  FloatingIPBuilder: require('./floatingIPs/floatingIPBuilder'),
  FloatingIPActionList: require('./floatingIPs/actions/floatingIPActionList'),

  SSHKey: require('./sshKeys/sshKey'),
  SSHKeyList: require('./sshKeys/sshKeyList'),

  ServerType: require('./serverTypes/serverType'),
  ServerTypeList: require('./serverTypes/serverTypeList'),

  Location: require('./locations/location'),
  LocationList: require('./locations/locationList'),

  Datacenter: require('./datacenters/datacenter'),
  DatacenterList: require('./datacenters/datacenterList'),

  Image: require('./images/image'),
  ImageList: require('./images/imageList'),

  ISO: require('./isos/iso'),
  ISOList: require('./isos/isoList'),

  Network: require('./networks/network'),
  NetworkList: require('./networks/networkList'),
  Route: require('./networks/route'),
  Subnet: require('./networks/subnet'),

  LoadBalancer: require('./loadBalancers/loadBalancer'),
  LoadBalancerList: require('./loadBalancers/loadBalancerList'),

  LoadBalancerType: require('./loadBalancerTypes/loadBalancerType'),
  LoadBalancerTypeList: require('./loadBalancerTypes/loadBalancerTypeList')
}
