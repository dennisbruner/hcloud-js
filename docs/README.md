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

## API

### Client

 - [Client](api/client.md)

### Endpoints

Endpoints that can be used to call the Hetzner Cloud API.

 - ActionsEndpoint
 - ServersEndpoint
   - ServerActionsEndpoint
 - FloatingIPsEndpoint
   - FloatingIPActionsEndpoint
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
 - Server
 - ServerList
 - FloatingIP
 - FloatingIPList
 - SSHKey
 - SSHKeyList
 - [Location](api/location.md)
 - [LocationList](api/location-list.md)
 - [Datacenter](api/datacenter.md)
 - [DatacenterList](api/datacenter-list.md)
 - Image
 - ImageList
 - ISO
 - ISOList

### Builders

 - ServerBuilder
 - FloatingIPBuilder

### Misc

 - [Pagination](api/pagination.md)
 - PublicNetwork
 - Address
 - AddressBlock
 - Traffic