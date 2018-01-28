# Action

Type: `class`

Actions show the results and progress of asynchronous requests to the API.

## Members

### .id

Type: `number`

### .command

Type: `string`

### .status

Type: `string`

Will be either `success`, `running` or `error`.

### .progress

Type: `number`

### .started

Type: `Date`

### .finished

Type: `Date` or `null`

### .resources

Type: `Array`

Resources the action relates to.