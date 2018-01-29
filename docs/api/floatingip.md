# FloatingIP

Type: `class`

An IP address or block that can be assigned/unassigned to/from servers at runtime.

## Functions

### \#isV4()

Returns: `boolean`

### \#isV6()

Returns: `boolean`

### \#changeDescription([description: string])

| Parameter   | Type     | Description         |
| ----------- | -------- | ------------------- |
| description | `string` | The new description |

Returns: `Promise<FloatingIP>`

### \#delete()

Returns: `Promise`

### \#assign(server: number|string|[Server](server.md))

| Parameter | Type                                        | Description                                                              |
| --------- | ------------------------------------------- | ------------------------------------------------------------------------ |
| server    | `number`, `string` or [`Server`](server.md) | The servers id, name or an instance of Server the IP will be assigned to |

Returns: `Promise<Action>`

Assigns this floating IP to a server.

### \#unassign()

Returns: `Promise<Action>`

Unassignes this floating IP from a server.

### \#getAddress(ip: string)

| Parameter | Type     | Description                        |
| --------- | -------- | ---------------------------------- |
| ip        | `string` | The IP address (optional for IPv4) |

Returns: [`Address`](address.md) or `null`

Only returns an [Address](address.md) instance if a DNS pointer has been set.

### \#getPointer(ip: string)

| Parameter | Type     | Description                        |
| --------- | -------- | ---------------------------------- |
| ip        | `string` | The IP address (optional for IPv4) |

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

### .id

Type: `number`

### .description

Type: `string`

### .ip

Type: `string`

### .type

Type: `string`

Will be either `ipv4` or `ipv6`.

### .server

Type: `number` or `null`

### .location

Type: [`Location`](location.md)

### .blocked

Type: `boolean`

### .addresses

Type: `Array`

An array of [`Addresses`](address.md).