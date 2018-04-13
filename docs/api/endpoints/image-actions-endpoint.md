# ImageActionsEndpoint

## Functions

### \#list(id, params)

| Parameter | Type     | Description                                                                                                      |
| --------- | -------- | ---------------------------------------------------------------------------------------------------------------- |
| id        | `number` | Image id.                                                                                                        |
| params    | `Object` | Additional uri parameters. See [official documentaion](https://docs.hetzner.cloud/#resources-image-actions-get). |

Returns: `Promise<ImageActionList>`

Returns a navigatable list of actions for the image.

### \#get(id, actionID)

| Parameter | Type     | Description |
| --------- | -------- | ----------- |
| id        | `number` | Image id.   |
| actionID  | `number` | Action id.  |

Returns: `Promise<Action>`

Returns a single [Action](../actions/action.md) class instance.

### \#changeProtection(id, data)

| Parameter | Type               | Description |
| --------- | ------------------ | ----------- |
| id        | `number`           | Image id.   |
| data      | `Object`           | See below.  |

Returns: `Promise<Action>`

#### Data object

```javascript
{
    "delete": // If true, prevents the Image from being deleted
}
```
