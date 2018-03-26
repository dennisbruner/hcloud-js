# ISOsEndpoint

## Functions

### \#list(params)

| Parameter | Type     | Description                                                                                             |
| --------- | -------- | ------------------------------------------------------------------------------------------------------- |
| params    | `Object` | Additional uri parameters. See [official documentaion](https://docs.hetzner.cloud/#resources-isos-get). |

Returns: `Promise<ISOsList>`

Returns a navigateable list of ISOs.

### \#get(id)

| Parameter | Type     | Description |
| --------- | -------- | ----------- |
| id        | `number` | ISO id.     |

Returns: `Promise<Action>`

Returns a single [ISO](../isos/iso.md) class instance.
