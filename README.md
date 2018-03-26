# hcloud-js

[![StandardJS](https://img.shields.io/badge/code--style-standard-yellowgreen.svg?style=flat)](https://standardjs.com)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE.md)
[![Travis](https://img.shields.io/travis/dennisbruner/hcloud-js.svg?style=flat)](https://travis-ci.org/dennisbruner/hcloud-js)
[![Known Vulnerabilities](https://snyk.io/test/github/dennisbruner/hcloud-js/badge.svg?targetFile=package.json)](https://snyk.io/test/github/dennisbruner/hcloud-js?targetFile=package.json)

A Node.js module for the Hetzner Cloud API

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
  .sshKey('work')
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

## Documentation

 - [hcloud-js documentation page](https://hcloud-js.readthedocs.org/)
 - [Official Hetzner Cloud API documentation](https://docs.hetzner.cloud/)

## License

[MIT](LICENSE.md)
