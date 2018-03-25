# ISO

Type: `class`

ISOs are Read-Only images of DVDs. These can be mount to your server at runtime.

## Members

### .id

Type: `number`

### .name

Type: `string` or `null`

Unique identifier of the ISO. Only set for public ISOs.

### .description

Type: `string`

Description of the ISO. e.g.: `FreeBSD 11.0 x64`

### .type

Type: `string`

Type of the ISO. Will be either `public` or `private`.
