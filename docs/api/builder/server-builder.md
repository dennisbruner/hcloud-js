# ServerBuilder

A utility class to easily create new servers by chaining functions.

## Functions

### \#name(value)

| Parameter | Type     | Description               |
| --------- | -------- | ------------------------- |
| value     | `string` | A name for the new server |

Returns: [`ServerBuilder`](server-builder.md)

### \#serverType(value)

| Parameter | Type                                                               | Description                                            |
| --------- | ------------------------------------------------------------------ | ------------------------------------------------------ |
| value     | `number`, `string` or [`ServerType`](../servertypes/servertype.md) | May be an ID, a name or the ServerType instance itself. |

Returns: [`ServerBuilder`](server-builder.md)

### \#datacenter(value)

| Parameter | Type                                                               | Description                                            |
| --------- | ------------------------------------------------------------------ | ------------------------------------------------------ |
| value     | `number`, `string` or [`Datacenter`](../datacenters/datacenter.md) | May be an ID, a name or the Datacenter instance itself. |

Returns: [`ServerBuilder`](server-builder.md)

### \#location(value)

| Parameter | Type                                                         | Description                                           |
| --------- | ------------------------------------------------------------ | ----------------------------------------------------- |
| value     | `number`, `string` or [`Location`](../locations/location.md) | May be an ID, a name or the Location instance itself. |

Returns: [`ServerBuilder`](server-builder.md)

Sets the location where the server will be created. If a datacenter has not been specified, a random one in this location will be chosen by Hetzner.

### \#startAfterCreate(value)

| Parameter | Type      | Description                                          |
| --------- | --------- | ---------------------------------------------------- |
| value     | `boolean` | Start Server right after creation. Defaults to true. |

Returns: [`ServerBuilder`](server-builder.md)

### \#image(value)

| Parameter | Type                                                | Description                                        |
| --------- | --------------------------------------------------- | -------------------------------------------------- |
| value     | `number`, `string` or [`Image`](../images/image.md) | May be an ID, a name or the Image instance itself. |

Returns: [`ServerBuilder`](server-builder.md)

Sets the image from which the server will be created from.

### \#sshKey(value)

| Parameter | Type                                                   | Description                                         |
| --------- | ------------------------------------------------------ | --------------------------------------------------- |
| value     | `number`, `string` or [`SSHKey`](../sshkeys/sshkey.md) | May be an ID, a name or the SSHKey instance itself. |

Returns: [`ServerBuilder`](server-builder.md)

Adds an sshkey for the root user. Can be used multiple times to add more sshkeys.

### \#userData(value)

| Parameter | Type     | Description                                          |
| --------- | -------- | ---------------------------------------------------- |
| value     | `string` | [cloud-init](https://cloud-init.io) userdata script. |

Returns: [`ServerBuilder`](server-builder.md)

### \#create()

Returns: `Promise<Object>`

Sends a request to Hetzners API to create the built server.

#### Returned object

```javascript
{
  "server": // The newly created server instance
  "action": // Action instance for creating this server
}
```
