# AddressBlock

Type: `class`

## Functions

### \#getAddress(ip)

| Parameter | Type     | Description     |
| --------- | -------- | --------------- |
| ip        | `string` |  The IP address |

Returns: [`Address`](address.md) or `null`

Only returns an [Address](address.md) instance if a DNS pointer has been set.

### \#getPointer(ip)

| Parameter | Type     | Description    |
| --------- | -------- | -------------- |
| ip        | `string` | The IP address |

Returns: `string` or `null`

Returns the pointer for the IP address if one has been set.

### \#setPointer(ip, pointer)

| Parameter | Type     | Description                                                       |
| --------- | -------- | ----------------------------------------------------------------- |
| ip        | `string` | The IP address                                                    |
| pointer   | `string` | [FQDN](https://en.wikipedia.org/wiki/Fully_qualified_domain_name) |

Returns: `Promise<Action>`

Returns an [Action](../actions/action.md) for setting the pointer.

## Properties

### .addresses

Type: `Array`

An array containing [`Addresses`](address.md).

### .blocked

Type: `boolean`
