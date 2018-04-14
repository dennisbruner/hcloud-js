# FloatingIP

Type: `class`

An IP address or block that can be assigned/unassigned to/from servers at runtime.

## Functions

### \#getActions([params])

| Parameter | Type     | Description             |
| --------- | -------- | ----------------------- |
| params    | `Object` | Can be used for sorting |

Returns: `Promise<FloatingIPActionList>`

Get an action list for this specific floating IP.

### \#getAction(id)

| Parameter | Type     | Description   |
| --------- | -------- | ------------- |
| id        | `number` | The action id |

Returns: `Promise<Action>`

Get a specific action for this floating IP.

### \#isV4()

Returns: `boolean`

### \#isV6()

Returns: `boolean`

### \#changeDescription([description])

| Parameter   | Type     | Description         |
| ----------- | -------- | ------------------- |
| description | `string` | The new description |

Returns: `Promise<FloatingIP>`

### \#delete()

Returns: `Promise`

### \#assign(server)

| Parameter | Type                                        | Description                                                              |
| --------- | ------------------------------------------- | ------------------------------------------------------------------------ |
| server    | `number`, `string` or [`Server`](../servers/server.md) | The servers id, name or an instance of Server the IP will be assigned to |

Returns: `Promise<Action>`

Assigns this floating IP to a server.

### \#unassign()

Returns: `Promise<Action>`

Unassignes this floating IP from a server.

### \#getAddress(ip)

| Parameter | Type     | Description                        |
| --------- | -------- | ---------------------------------- |
| ip        | `string` | The IP address (optional for IPv4) |

Returns: [`Address`](../misc/address.md) or `null`

Only returns an [Address](../misc/address.md) instance if a DNS pointer has been set.

### \#getPointer(ip)

| Parameter | Type     | Description                        |
| --------- | -------- | ---------------------------------- |
| ip        | `string` | The IP address (optional for IPv4) |

Returns: `string` or `null`

Returns the pointer for the IP address if one has been set.

### \#setPointer(ip, pointer)

| Parameter | Type     | Description                                                       |
| --------- | -------- | ----------------------------------------------------------------- |
| ip        | `string` | The IP address                                                    |
| pointer   | `string` | [FQDN](https://en.wikipedia.org/wiki/Fully_qualified_domain_name) |

Returns: `Promise<Action>`

Returns an [Action](../actions/action.md) for setting the pointer.

### \#changeProtection(data)

| Parameter | Type               | Description |
| --------- | ------------------ | ----------- |
| data      | `Object`           | See below.  |

Returns: `Promise<Action>`

#### Data object

```javascript
{
    "delete": // If true, prevents the floating IP from being deleted
}
```

## Properties

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

Type: [`Location`](../locations/location.md)

### .blocked

Type: `boolean`

### .addresses

Type: `Array`

An array of [`Addresses`](../misc/address.md).

### .protection

Type: `Object`

Protection configuration for the floating IP.
