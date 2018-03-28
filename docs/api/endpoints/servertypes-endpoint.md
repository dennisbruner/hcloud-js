# ServerTypesEndpoint

## Functions

### \#list(params)

| Parameter | Type     | Description                                                                                                     |
| --------- | -------- | --------------------------------------------------------------------------------------------------------------- |
| params    | `Object` | Additional uri parameters. See [official documentaion](https://docs.hetzner.cloud/#resources-server-types-get). |

Returns: `Promise<ServerTypeList>`

Returns a navigatable list of server types.

### \#get(id)

| Parameter | Type     | Description      |
| --------- | -------- | ---------------- |
| id        | `number` | Server type id.  |

Returns: `Promise<ServerType>`

Returns a single [ServerType](../servertypes/servertype.md) class instance.
