# ImagesEndpoint

## Functions

### \#list(params)

| Parameter | Type     | Description                                                                                               |
| --------- | -------- | --------------------------------------------------------------------------------------------------------- |
| params    | `Object` | Additional uri parameters. See [official documentaion](https://docs.hetzner.cloud/#resources-images-get). |

Returns: `Promise<ImageList>`

Returns a navigatable list of images.

### \#get(id)

| Parameter | Type     | Description |
| --------- | -------- | ----------- |
| id        | `number` | Image id.   |

Returns: `Promise<Image>`

Returns a single [Image](../images/image.md) class instance.

### \#update(id, description, type)

| Parameter   | Type     | Description                                 |
| ----------- | -------- | ------------------------------------------- |
| id          | `number` | Image id.                                   |
| description | `string` | New description of image (optional).        |
| type        | `string` | Destination image type. Choices: `snapshot` |

Returns: `Promise<Image>`

### \#delete(id)

| Parameter | Type     | Description |
| --------- | -------- | ----------- |
| id        | `number` | Image id.   |

Returns: `Promise`

## Properties

### .actions

An instance of [ImageActionsEndpoint](image-actions-endpoint.md)
