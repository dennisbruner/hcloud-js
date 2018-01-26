# hcloud-js

![](https://img.shields.io/badge/code--style-standard-yellowgreen.svg?style=flat-square)
![](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)

A Node.js module for the Hetzner Cloud API

**This module is in active development! Don't expect anything to work yet!**

## Progress

What currently works:

 - Actions - `/actions`
 - SSH Keys - `/ssh_keys`
 - Locations - `/locations`
 - Datacenters - `/datacenters`
 - ISOs - `/isos`

## Example

```javascript
const HetznerCloud = require('hcloud-js')

let client = new HetznerCloud.Client('API_TOKEN')

// Get a list of actions
client.actions.list()
  .then(console.log)
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
