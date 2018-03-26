# LocationsEndpoint

## Functions

### \#list(params)

| Parameter | Type     | Description                                                                                                  |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------ |
| params    | `Object` | Additional uri parameters. See [official documentaion](https://docs.hetzner.cloud/#resources-locations-get). |

Returns: `Promise<LocationList>`

Returns a navigateable list of locations.

### \#get(id)

| Parameter | Type     | Description   |
| --------- | -------- | ------------- |
| id        | `number` | Location id.  |

Returns: `Promise<Location>`

Returns a single [Location](../locations/location.md) class instance.
