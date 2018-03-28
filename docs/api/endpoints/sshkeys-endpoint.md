# SSHKeysEndpoint

## Functions

### \#list(params)

| Parameter | Type     | Description                                                                                                 |
| --------- | -------- | ----------------------------------------------------------------------------------------------------------- |
| params    | `Object` | Additional uri parameters. See [official documentaion](https://docs.hetzner.cloud/#resources-ssh-keys-get). |

Returns: `Promise<SSHKeyList>`

Returns a navigatable list of SSH keys.

### \#get(id)

| Parameter | Type     | Description |
| --------- | -------- | ----------- |
| id        | `number` | SSH key id. |

Returns: `Promise<SSHKey>`

Returns a single [SSHKey](../sshkeys/sshkey.md) class instance.

### \#create(name, publicKey)

| Parameter | Type     | Description                 |
| --------- | -------- | --------------------------- |
| name      | `string` | A name for the new SSH key. |
| publicKey | `string` | Public key.                 |

Returns: `Promise<SSHKey>`

### \#changeName(id, name)

| Parameter | Type     | Description               |
| --------- | -------- | ------------------------- |
| id        | `number` | SSH key id.               |
| name      | `string` | New name for the SSH key. |

Returns: `Promise<SSHKey>`

### \#delete(id)

| Parameter | Type     | Description |
| --------- | -------- | ----------- |
| id        | `number` | SSH key id. |

Returns: `Promise`
