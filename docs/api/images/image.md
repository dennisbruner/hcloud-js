# Image

Type: `class`

Images can be used to rebuild your server. The can be System Images, Snapshot Images or Backup Images.

[See the official API documentation for more info.](https://docs.hetzner.cloud/#resources-images)

## Functions

### \#update([description[, type]])

| Parameter   | Type     | Description                                               |
| ----------- | -------- | --------------------------------------------------------- |
| description | `string` | New description of the Image                              |
| type        | `string` | Destination image type to convert to. Choices: `snapshot` |

Returns: `Promise<Image>`

### \#delete()

Returns: `Promise`

Deletes the image.

## Members

### .id

Type: `number`

### .name

Type: `string` or `null`

Unique identifier of the image. This value is only set for system images.

### .description

Type: `string`

Description of the image. e.g.: `Ubuntu 16.04 Standard 64 bit`

### .imageSize

Type: `number` or `null`

Image size in GB.

### .diskSize

Type: `number`

Size of the disk contained in the image in GB.

### .created

Type: `Date`

### .createdFrom

Type: `Object` or `null`

Information about the server the image was created from.

### .boundTo

Type: `number` or `null`

ID of server the image is bound to. Only set for images of type `backup`.

### .osFlavor

Type: `string`

Flavor of operating system contained in the image. Will be either `ubuntu`, `centos`, `debian`, `fedora` or `unknown`

### .osVersion

Type: `string` or `null`

Operating system version.

### .rapidDeploy

Type: `boolean`

Indicates that rapid deploy of the image is available.
