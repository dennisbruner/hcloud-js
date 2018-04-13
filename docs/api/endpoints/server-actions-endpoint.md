# ServerActionsEndpoint

## Functions

### \#list(id, params)

| Parameter | Type     | Description                                                                                                       |
| --------- | -------- | ----------------------------------------------------------------------------------------------------------------- |
| id        | `number` | Server id.                                                                                                        |
| params    | `Object` | Additional uri parameters. See [official documentaion](https://docs.hetzner.cloud/#resources-server-actions-get). |

Returns: `Promise<ServerActionList>`

Returns a navigatable list of actions for the server.

### \#get(id, serverID)

| Parameter | Type     | Description |
| --------- | -------- | ----------- |
| id        | `number` | Server id.  |
| serverID  | `number` | Action id.  |

Returns: `Promise<Action>`

Returns a single [Action](../actions/action.md) class instance.

### \#powerOn(id)

| Parameter | Type     | Description |
| --------- | -------- | ----------- |
| id        | `number` | Server id.  |

Returns: `Promise<Action>`

Power on a server.

### \#powerOff(id)

| Parameter | Type     | Description |
| --------- | -------- | ----------- |
| id        | `number` | Server id.  |

Returns: `Promise<Action>`

Cuts power to the server. You may loose data by doing this.

### \#reboot(id)

| Parameter | Type     | Description |
| --------- | -------- | ----------- |
| id        | `number` | Server id.  |

Returns: `Promise<Action>`

Reboots a server gracefully by sending an ACPI request.

### \#reset(id)

| Parameter | Type     | Description |
| --------- | -------- | ----------- |
| id        | `number` | Server id.  |

Returns: `Promise<Action>`

Same as **#powerOff()** but starts the server after powering off.

### \#shutdown(id)

| Parameter | Type     | Description |
| --------- | -------- | ----------- |
| id        | `number` | Server id.  |

Returns: `Promise<Action>`

Shuts down a server gracefully by sending an ACPI shutdown request.

### \#resetPassword(id)

| Parameter | Type     | Description |
| --------- | -------- | ----------- |
| id        | `number` | Server id.  |

Returns: `Promise<Object>`

Tells the server to reset the root password.

#### Returned object

```javascript
{
  "rootPassword": "ABC123",
  "action": // ... An Action instance
}
```

### \#enableRescue(id, [type[, sshKeys]])

| Parameter | Type     | Description                                                           |
| --------- | -------- | --------------------------------------------------------------------- |
| id        | `number` | Server id.                                                            |
| type      | `string` | Can be `linux64`, `linux32` or `freebsd64` (default: `linux64`)       |
| sshKeys   | `Array`  | An array of `numbers`, `strings` or [`SSHKeys`](../sshkeys/sshkey.md) |

Returns: `Promise<Object>`

Enables rescue mode.

#### Returned object

```javascript
{
  "rootPassword": "ABC123",
  "action": // ... An Action instance
}
```

### \#disableRescue(id)

| Parameter | Type     | Description |
| --------- | -------- | ----------- |
| id        | `number` | Server id.  |

Returns: `Promise<Action>`

Disable rescue mode.

### \#createImage(id, [type[, description]])


| Parameter   | Type     | Description                       |
| ----------- | -------- | --------------------------------- |
| id          | `number` | Server id.                        |
| type        | `string` | Can be `snapshot` or `backup`     |
| description | `string` | The description for the new image |

Returns: `Promise<Object>`

Creates a new image.

#### Returned object

```javascript
{
  "image": // ... An Image instance
  "action": // ... An Action instance
}
```

### \#rebuild(id, image)

| Parameter | Type                                                | Description                               |
| --------- | --------------------------------------------------- | ----------------------------------------- |
| id        | `number`                                            | Server id.                                |
| image     | `number`, `string` or [`Image`](../images/image.md) | The image the server will be rebuilt from |

Returns: `Promise<Action>`

Rebuild the server from an image.

### \#changeType(id, type[, upgradeDisk])

| Parameter   | Type                                                               | Description                                         |
| ----------- | ------------------------------------------------------------------ | --------------------------------------------------- |
| id          | `number`                                                           | Server id.                                          |
| type        | `number`, `string` or [`ServerType`](../servertypes/servertype.md) | ID, name or ServerType the server should migrate to |
| upgradeDisk | `boolean`                                                          | Does not upgrade the disk if false                  |

Returns: `Promise<Action>`

Changes the server type.

### \#enableBackup(id, [backupWindow])

| Parameter    | Type     | Description                                                             |
| ------------ | -------- | ----------------------------------------------------------------------- |
| id           | `number` | Server id.                                                              |
| backupWindow | `string` | UTC time window: `22-02`, `02-06`, `06-10`, `10-14`, `14-18` or `18-22` |

Returns: `Promise<Action>`

Enables backups for this server.

### \#disableBackup(id)

| Parameter | Type     | Description |
| --------- | -------- | ----------- |
| id        | `number` | Server id.  |

Returns: `Promise<Action>`

Disables backups for this server.

### \#attachISO(id, iso)

| Parameter | Type                                          | Description                      |
| --------- | --------------------------------------------- | -------------------------------- |
| id        | `number`                                      | Server id.                       |
| iso       | `number`, `string` or [`ISO`](../isos/iso.md) | ISO to be attached to the server |

Returns: `Promise<Action>`

Attaches an ISO.

### \#detachISO(id)

| Parameter | Type     | Description |
| --------- | -------- | ----------- |
| id        | `number` | Server id.  |

Returns: `Promise<Action>`

Detach any attached ISO.

### \#changeProtection(id, data)

| Parameter | Type               | Description |
| --------- | ------------------ | ----------- |
| id        | `number`           | Server id.  |
| data      | `Object`           | See below.  |

Returns: `Promise<Action>`

#### Data object

```javascript
{
    "delete": // If true, prevents the server from being deleted
    "rebuild": // If true, prevents the server from being rebuilt
}
```

### \#requestConsole(id)

| Parameter | Type     | Description |
| --------- | -------- | ----------- |
| id        | `number` | Server id.  |

Returns: `Promise<Object>`

Requests access to the console via VNC.

#### Returned object

```javascript
{
  wssUrl: "wss://...", // Secure websocket URL
  password: "...", // VNC password
  action: // An instance of Action
}
```
