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

 - Action
 - ActionList
 - Server
 - ServerList
 - FloatingIP
 - FloatingIPList
 - SSHKey
 - SSHKeyList
 - Location
 - LocationList
 - Image
 - ImageList
 - ISO
 - ISOList

### Builders

 - ServerBuilder
 - FloatingIPBuilder

### Misc

 - PublicNetwork
 - Address
 - AddressBlock
 - Traffic