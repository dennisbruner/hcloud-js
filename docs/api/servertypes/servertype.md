# ServerType

Type: `class`

Server types define kinds of servers offered.

## Properties

### .id

Type: `number`

### .name

Type: `string` or `null`

Unique identifier of the server type. e.g.: `cx11`

### .description

Type: `string`

### .cores

Type: `number`

Number of cpu cores a server of this type will have.

### .memory

Type: `number`

Memory a server of this type will have in GB.

### .disk

Type: `number`

Disk size a server of this type will have in GB.

### .storageType

Type: `string`

Type of server boot drive. Local has higher speed. Network has better availability. Will be either `local` or `network`.

### .prices

Type: `Object`

Prices in different locations.

#### Example data

```javascript
[
  {
    "location": "fsn1",
    "priceHourly": {
      "net": 1,
      "gross": 1.19
    },
    "priceMonthly": {
      "net": 1,
      "gross": 1.19
    }
  }
]
```
