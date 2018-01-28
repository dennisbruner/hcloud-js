# hcloud-js

![](https://img.shields.io/badge/code--style-standard-yellowgreen.svg?style=flat-square)
![](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)
[![Travis](https://img.shields.io/travis/dennisbruner/hcloud-js.svg?style=flat-square)](https://travis-ci.org/dennisbruner/hcloud-js)

A Node.js module for the Hetzner Cloud API

**This module is in active development! Don't expect anything to work yet!**

## Progress

What works:

 - [Actions](https://docs.hetzner.cloud/#resources-actions)
 - [Servers](https://docs.hetzner.cloud/#resources-servers)
 - [Server Actions](https://docs.hetzner.cloud/#resources-server-actions)
 - [Floating IPs](https://docs.hetzner.cloud/#resources-floating-ips)
 - [Floating IP Actions](https://docs.hetzner.cloud/#resources-floating-ip-actions)
 - [SSH Keys](https://docs.hetzner.cloud/#resources-ssh-keys)
 - [Server Types](https://docs.hetzner.cloud/#resources-server-types)
 - [Locations](https://docs.hetzner.cloud/#resources-locations)
 - [Datacenters](https://docs.hetzner.cloud/#resources-datacenters)
 - [Images](https://docs.hetzner.cloud/#resources-images)
 - [ISOs](https://docs.hetzner.cloud/#resources-isos)

What does not work yet:

 - [Getting price information](https://docs.hetzner.cloud/#resources-pricing-get)
 - [Getting metrics for a server](https://docs.hetzner.cloud/#resources-servers-get-2)

## Example

### Create a client instance

```javascript
const HetznerCloud = require('hcloud-js')
let client = new HetznerCloud.Client('API_TOKEN')
```

### Build and create a server

```javascript
client.servers.build('my-awesome-server')
  .serverType('cx11')
  .location('nbg1')
  .image('debian-9')
  .sshKey(1234)
  .create()
  .then(function (response) {
    // The response object contains:
    // response.server - The server class instance
    // response.action - The action for creating this server
  })
  .catch(function (error) {
    // Handle error...
  })
```

### Enable backups for the created server

```javascript
  // ...
  .then(function (response) {
    // We want our backups to be made between 2 a.m. - 6 a.m.
    return response.server.enableBackup('02-06')
  })
  .then(function (action) {
    // action - This is the Action class instance returned by enableBackup
    console.log(action)
  })
  .catch(function (error) {
    // Handle error...
  })
```

## Official documentation

Official documentation for the Hetzner Cloud API can be found here:

https://docs.hetzner.cloud/

## License

[MIT](LICENSE.md)
