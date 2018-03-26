# ActionsEndpoint

## Functions

### \#list(params)

| Parameter | Type     | Description                                                                                                |
| --------- | -------- | ---------------------------------------------------------------------------------------------------------- |
| params    | `Object` | Additional uri parameters. See [official documentaion](https://docs.hetzner.cloud/#resources-actions-get). |

Returns: `Promise<ActionList>`

Returns a navigateable list of actions.

### \#get(id)

| Parameter | Type     | Description |
| --------- | -------- | ----------- |
| id        | `number` | Action id.  |

Returns: `Promise<Action>`

Returns a single [Action](../actions/action.md) class instance.
