# Documentation

**This documentation is not finished yet!**

## Examples

### Servers

 - Creating and deleting servers
 - Power off and on
 - Enabling and disabling backups
 - Rebuilding from image
 - Upgrading (changing server type)

### Floating IPs

 - Creating and deleting floating IPs
 - Assigning and unassigning
 - Setting or getting DNS pointers

### Misc

 - Sorting lists

## API

### Client

 - [Client](api/client.md)

### Endpoints

Endpoints that can be used to call the Hetzner Cloud API.

 - ActionsEndpoint
 - ServersEndpoint
   - ServerActionEndpoint
 - FloatingIPsEndpoint
   - FloatingIPActionEndpoint
 - SSHKeysEndpoint
 - ServerTypesEndpoint
 - LocationsEndpoint
 - DatacentersEndpoint
 - ImagesEndpoint
 - ISOsEndpoint

### Response classes

Classes that will directly be returned by endpoints.

 - [Action](api/action.md)
 - [ActionList](api/action-list.md)
 - [Server](api/server.md)
 - [ServerList](api/server-list.md)
 - ServerActionList
 - [FloatingIP](api/floatingip.md)
 - [FloatingIPList](api/floatingip-list.md)
 - FloatingIPActionList
 - [SSHKey](api/sshkey.md)
 - [SSHKeyList](api/sshkey-list.md)
 - [ServerType](api/servertype.md)
 - [ServerTypeList](api/servertype-list.md)
 - [Location](api/location.md)
 - [LocationList](api/location-list.md)
 - [Datacenter](api/datacenter.md)
 - [DatacenterList](api/datacenter-list.md)
 - [Image](api/image.md)
 - [ImageList](api/image-list.md)
 - [ISO](api/iso.md)
 - [ISOList](api/iso-list.md)

### Builders

 - ServerBuilder
 - FloatingIPBuilder

### Misc

 - [Pagination](api/pagination.md)
 - [PublicNetwork](api/public-network.md)
 - [Address](api/address.md)
 - [AddressBlock](api/address-block.md)
 - [Traffic](api/traffic.md)