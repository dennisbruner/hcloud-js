# hcloud-js

![](https://img.shields.io/badge/code--style-standard-yellowgreen.svg?style=flat-square)
![](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)

A Node.js module for the Hetzner Cloud API

**This module is in active development! Don't expect anything to work yet!**

## Example

```javascript
const HetznerCloud = require('hcloud-js')

let client = new HetznerCloud.Client('API_TOKEN')

// Get a list of actions
client.actions.list()
  .then(console.log)
```

## License

[MIT](LICENSE.md)
