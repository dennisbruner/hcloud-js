# hcloud-js

![](https://img.shields.io/badge/code--style-standard-yellowgreen.svg?style=flat-square)
![](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)

A Node.js module for the Hetzner Cloud API

**This module is in active development! Don't expect anything to work yet!**

## Progress

What currently works:

 - [Actions](https://docs.hetzner.cloud/#resources-actions)
 - [SSH Keys](https://docs.hetzner.cloud/#resources-ssh-keys)
 - [Server Types](https://docs.hetzner.cloud/#resources-server-types)
 - [Locations](https://docs.hetzner.cloud/#resources-locations)
 - [Datacenters](https://docs.hetzner.cloud/#resources-datacenters)
 - [Images](https://docs.hetzner.cloud/#resources-images)
 - [ISOs](https://docs.hetzner.cloud/#resources-isos)

What is beeing worked on (and somewhat works):

 - [Servers](https://docs.hetzner.cloud/#resources-servers)
 - [Server Actions](https://docs.hetzner.cloud/#resources-server-actions)
 - [Floating IPs](https://docs.hetzner.cloud/#resources-floating-ips)
 - [Floating IP Actions](https://docs.hetzner.cloud/#resources-floating-ip-actions)

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

## camelCase & snake_case

Since [StandardJS](https://standardjs.com/rules.html) requires camelCase variables but Hetzner's API returns snake_case variables,
the library will automatically convert snake_case to camelCase and vice versa. For example:

Hetzner's API returns the following snake_case variables for pagination:

```javascript
"page": 2,
"per_page": 25,
"previous_page": 1,
"next_page": 3,
"last_page": 4,
"total_entries": 100
```

These will be converted to:

```javascript
"page": 2,
"perPage": 25,
"previousPage": 1,
"nextPage": 3,
"lastPage": 4,
"totalEntries": 100
```

This may of course change in the future.
Any feedback on this topic is welcome!

## License

[MIT](LICENSE.md)
