# FloatingIPActionsEndpoint

## Functions

### \#list(id, params)

| Parameter | Type     | Description                                                                                                            |
| --------- | -------- | ---------------------------------------------------------------------------------------------------------------------- |
| id        | `number` | Floating IP id.                                                                                                        |
| params    | `Object` | Additional uri parameters. See [official documentaion](https://docs.hetzner.cloud/#resources-floating-ip-actions-get). |

Returns: `Promise<FloatingIPActionList>`

Returns a navigatable list of actions for the floating IP.

### \#get(id, actionID)

| Parameter | Type     | Description     |
| --------- | -------- | --------------- |
| id        | `number` | Floating IP id. |
| actionID  | `number` | Action id.      |

Returns: `Promise<Action>`

Returns a single [Action](../actions/action.md) class instance.

### \#assign(id, serverID)

| Parameter | Type     | Description                                     |
| --------- | -------- | ----------------------------------------------- |
| id        | `number` | Floating IP id.                                 |
| serverID  | `number` | The server this floating IP will be assigned to |

Returns: `Promise<Action>`

### \#unassign(id, serverID)

| Parameter | Type     | Description     |
| --------- | -------- | --------------- |
| id        | `number` | Floating IP id. |

Returns: `Promise<Action>`

### \#changeDnsPointer(id, ip, pointer)

| Parameter | Type               | Description          |
| --------- | ------------------ | -------------------- |
| id        | `number`           | Floating IP id.      |
| ip        | `string`           | IP address.          |
| pointer   | `string` or `null` | Reverse DNS pointer. |

Returns: `Promise<Action>`

### \#changeProtection(id, data)

| Parameter | Type               | Description     |
| --------- | ------------------ | --------------- |
| id        | `number`           | Floating IP id. |
| data      | `Object`           | See below.      |

Returns: `Promise<Action>`

#### Data object

```javascript
{
    "delete": // If true, prevents the Floating IP from being deleted
}
```
