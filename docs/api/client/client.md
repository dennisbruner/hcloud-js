# Client

Type: `class`

The Client class is the main class for this module and exposes different
endpoint classes to communicate with the Hetzner Cloud API.

## Functions

### \#constructor(opts)

| Parameter | Type                 | Description                                |
| --------- | -------------------- | ------------------------------------------ |
| opts      | `string` or `Object` | An API-Token or an Object (see below)      |

#### Passing an object

```javascript
// These are the default values. Replace them with yours!
const client = new HetznerCloud.Client({
  // API-Token (required)
  token: null,

  // Default base URL
  baseURL: 'https://api.hetzner.cloud/v1/',

  // Response timeout (5 seconds)
  timeout: 1000 * 5,

  // See "https://github.com/axios/axios#request-config" for more info
  proxy: false
})
```

## Properties

### .actions

An instance of [ActionsEndpoint](../endpoints/actions-endpoint.md)

### .servers

An instance of ServerssEndpoint

### .floatingIPs

An instance of FloatingIPsEndpoint

### .sshKeys

An instance of SSHKeysEndpoint

### .serverTypes

An instance of ServerTypesEndpoint

### .locations

An instance of LocationsEndpoint

### .datacenters

An instance of [DatacentersEndpoint](../endpoints/datacenters-endpoint.md)

### .images

An instance of ImagesEndpoint

### .isos

An instance of [ISOsEndpoint](../endpoints/isos-endpoint.md)
