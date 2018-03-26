# DatacentersEndpoint

## Functions

### \#list(params)

| Parameter | Type     | Description                                                                                                    |
| --------- | -------- | -------------------------------------------------------------------------------------------------------------- |
| params    | `Object` | Additional uri parameters. See [official documentaion](https://docs.hetzner.cloud/#resources-datacenters-get). |

Returns: `Promise<DatacenterList>`

Returns a navigatable list of datacenters.

### \#get(id)

| Parameter | Type     | Description     |
| --------- | -------- | --------------- |
| id        | `number` | Datacenter id.  |

Returns: `Promise<Datacenter>`

Returns a single [Datacenter](../datacenters/datacenter.md) class instance.
