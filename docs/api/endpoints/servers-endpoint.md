# ServersEndpoint

## Functions

### \#list(params)

| Parameter | Type     | Description                                                                                                |
| --------- | -------- | ---------------------------------------------------------------------------------------------------------- |
| params    | `Object` | Additional uri parameters. See [official documentaion](https://docs.hetzner.cloud/#resources-servers-get). |

Returns: `Promise<ServerList>`

Returns a navigatable list of servers.

### \#get(id)

| Parameter | Type     | Description |
| --------- | -------- | ----------- |
| id        | `number` | Server id.  |

Returns: `Promise<Server>`

Returns a single [Server](../servers/server.md) class instance.

### \#build(name)

| Parameter | Type     | Description                |
| --------- | -------- | -------------------------- |
| name      | `string` | A new name for the server. |

Returns: [`ServerBuilder`](../builder/server-builder.md)

### \#changeName(id, name)

| Parameter | Type     | Description                 |
| --------- | -------- | --------------------------- |
| id        | `number` | The server id.              |
| name      | `string` | A new name for this server. |

Returns: `Promise<Server>`

Returns an updated version of the [Server](../servers/server.md) instance.

### \#delete(id)

| Parameter | Type     | Description    |
| --------- | -------- | -------------- |
| id        | `number` | The server id. |

Returns: `Promise<Action>`

## Properties

### .actions

An instance of [ServerActionsEndpoint](server-actions-endpoint.md)
