# Location

Type: `class`

Datacenters are organized by locations. Servers created by only specifying only the location will choose a random Datacenter in that location.

## Members

### .id

Type: `number`

### .name

Type: `string`

The location name. e.g.: `fsn1`

### .description

Type: `string`

The location description. e.g: `Falkenstein DC Park 1`

### .country

Type: `string`

ISO 3166-1 alpha-2 code of the country the location resides in. e.g.: `DE`

### .city

Type: `string`

City the location is closest to.

### .latitude

Type: `number`

Latitude of the city closest to the location.

### .longitude

Type: `number`

Longitude of the city closest to the location.