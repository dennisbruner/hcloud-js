# hcloud-js

[![StandardJS](https://img.shields.io/badge/code--style-standard-yellowgreen.svg?style=flat)](https://standardjs.com)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE.md)
[![Documentation Status](https://readthedocs.org/projects/hcloud-js/badge/?version=latest)](http://hcloud-js.readthedocs.io/en/latest/?badge=latest)
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
const { server } = await client.servers.build('my-awesome-server')
  .serverType('cx11')
  .location('nbg1')
  .image('debian-9')
  .sshKey('work')
  .create()
```

## Documentation

 - [hcloud-js documentation page](https://hcloud-js.readthedocs.org/)
 - [Official Hetzner Cloud API documentation](https://docs.hetzner.cloud/)

## Development

### Quick setup

* Clone this repo with `git clone https://github.com/dennisbruner/hcloud-js.git`
* `cd hcloud-js`
* Run `npm install` to install dependencies
* Copy `.env.dist` to `.env` file and setup your access token. [You can use this guide by Hetzner.](https://docs.hetzner.cloud/#getting-started)


## License

[MIT](LICENSE.md)
