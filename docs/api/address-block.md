# AddressBlock

Type: `class`

## Functions

### \#getAddress(ip: string)

| Parameter | Type     | Description     |
| --------- | -------- | --------------- |
| ip        | `string` |  The IP address |

Returns: [`Address`](address.md) or `null`

Only returns an [Address](address.md) instance if a DNS pointer has been set.

### \#getPointer(ip: string)

| Parameter | Type     | Description    |
| --------- | -------- | -------------- |
| ip        | `string` | The IP address |

Returns: `string` or `null`

Returns the pointer for the IP address if one has been set.

### \#setPointer(ip: string, pointer: string)

| Parameter | Type     | Description                                                       |
| --------- | -------- | ----------------------------------------------------------------- |
| ip        | `string` | The IP address                                                    |
| pointer   | `string` | [FQDN](https://en.wikipedia.org/wiki/Fully_qualified_domain_name) |

Returns: `Promise<Action>`

Returns an [Action](action.md) for setting the pointer.

## Members

### .addresses

Type: `Array`

An array containing [`Addresses`](address.md).

### .blocked

Type: `boolean`