# SSHKey

Type: `class`

SSH keys are public keys you provide to the cloud system. They can be injected into servers at creation time.

## Functions

### \#changeName([name])

| Parameter | Type     | Description              |
| --------- | -------- | ------------------------ |
| name      | `string` | New name for the SSH key |

Returns: `Promise<SSHKey>`

### \#delete()

Returns: `Promise`

Deletes the SSH key.

## Properties

### .id

Type: `number`

### .name

Type: `string`

### .fingerprint

Type: `string`

### .publicKey

Type: `string`
