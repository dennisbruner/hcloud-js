# Datacenter

Type: `class`

The Datacenter is where your servers are located at.

## Functions

### \#isSupported(serverType: number|[ServerType](serverType.md))

| Parameter  | Type                                      | Description     |
| ---------- | ----------------------------------------- | --------------- |
| serverType | `number` or [`ServerType`](serverType.md) | The server type |

Checks wether the server type is supported by this datacenter or not.

### \#isAvailable(serverType: number|[ServerType](serverType.md))

| Parameter  | Type                                      | Description     |
| ---------- | ----------------------------------------- | --------------- |
| serverType | `number` or [`ServerType`](serverType.md) | The server type |

Checks wether the server type is available at this datacenter or not.

## Members

### .id

Type: `number`

### .name

Type: `string`

The location name. e.g.: `fsn1-dc8`

### .description

Type: `string`

The location description. e.g: `Falkenstein 1 DC 8`

### .location

Type: [`Location`](location.md)

The location where this Datacenter is located at.

### .serverTypes

Type: `Object`

[See the official API documentation for more info.](https://docs.hetzner.cloud/#resources-datacenters-get-1)