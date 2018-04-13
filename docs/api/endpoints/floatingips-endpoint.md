# FloatingIPsEndpoint

## Functions

### \#list(params)

| Parameter | Type     | Description                                                                                                     |
| --------- | -------- | --------------------------------------------------------------------------------------------------------------- |
| params    | `Object` | Additional uri parameters. See [official documentaion](https://docs.hetzner.cloud/#resources-floating-ips-get). |

Returns: `Promise<FloatingIPList>`

Returns a navigatable list of floating IPs.

### \#get(id)

| Parameter | Type     | Description      |
| --------- | -------- | ---------------- |
| id        | `number` | Floating IP id.  |

Returns: `Promise<FloatingIP>`

Returns a single [FloatingIP](../floatingips/floatingip.md) class instance.

### \#build(type)

| Parameter | Type     | Description               |
| --------- | -------- | ------------------------- |
| type      | `string` | Choices: `ipv4` or `ipv6` |

Returns: [`FloatingIPBuilder`](../builder/floatingip-builder.md)

### \#changeDescription(id, description)

| Parameter   | Type     | Description                             |
| ----------- | -------- | --------------------------------------- |
| id          | `number` | The floating IP id.                     |
| description | `string` | A new description for this floating IP. |

Returns: `Promise<FloatingIP>`

Returns an updated version of the [FloatingIP](../floatingips/floatingip.md) instance.

### \#delete(id)

| Parameter | Type     | Description         |
| --------- | -------- | ------------------- |
| id        | `number` | The floating IP id. |

Returns: `Promise`

## Properties

### .actions

An instance of [FloatingIPActionsEndpoint](floatingip-actions-endpoint.md)
