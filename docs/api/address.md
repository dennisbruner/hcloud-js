# Address

Type: `class`

Represents a single IP address (`/32` for IPv4 or `/128` for IPv6) that exposes methods to change the DNS pointer.

## Functions

### \#getPointer()

Returns: `string`

### \#setPointer(pointer: string)

| Parameter | Type     | Description                                                       |
| --------- | -------- | ----------------------------------------------------------------- |
| pointer   | `string` | [FQDN](https://en.wikipedia.org/wiki/Fully_qualified_domain_name) |

Returns: `Promise<Action>`

## Members

### .ip

Type: `string`

### .pointer

Type: `string`

### .blocked

Type: `boolean`