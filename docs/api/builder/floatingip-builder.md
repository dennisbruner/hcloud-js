# FloatingIPBuilder

A utility class to easily create and assign new floating IPs by chaining functions.

## Functions

### \#type(value)

| Parameter | Type     | Description               |
| --------- | -------- | ------------------------- |
| value     | `string` | Choices: `ipv4` or `ipv6` |

Returns: [`FloatingIPBuilder`](floatingip-builder.md)

### \#location(value)

| Parameter | Type                                                         | Description                                           |
| --------- | ------------------------------------------------------------ | ----------------------------------------------------- |
| value     | `number`, `string` or [`Location`](../locations/location.md) | May be an ID, a name or the Location instance itself. |

Returns: [`FloatingIPBuilder`](floatingip-builder.md)

### \#server(value)

| Parameter | Type                                         | Description                                 |
| --------- | -------------------------------------------- | ------------------------------------------- |
| value     | `number` or [`Server`](../servers/server.md) | May be an ID or the Server instance itself. |

Returns: [`FloatingIPBuilder`](floatingip-builder.md)

Optionally assignes the newly created floating IP to a server.

### \#description(value)

| Parameter | Type     | Description                        |
| --------- | -------- | ---------------------------------- |
| value     | `string` | A description for the floating IP. |

Returns: [`FloatingIPBuilder`](floatingip-builder.md)

### \#create()

Returns: `Promise<Object>`

Sends a request to Hetzners API to create the built floating IP.

#### Returned object

```javascript
{
  "floatingIP": // The newly created floating IP instance
  "action": // Action instance for creating this floating IP
}
```
