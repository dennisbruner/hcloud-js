# Pagination

Type: `class`

A class extended by lists to get the next/previous page from the API.

## Functions

### \#next()

Returns: `Promise<Class<?> extends Pagination>`

Fetches the next page and returns a new list of the same type.

### \#previous()

Returns: `Promise<Class<?> extends Pagination>`

Fetches the previous page and returns a new list of the same type.

### \#last()

Returns: `Promise<Class<?> extends Pagination>`

Fetches the last page and returns a new list of the same type.

## Members

### .page

Type: `number`

### .perPage

Type: `number`

### .previousPage

Type: `number` or `null`

### .nextPage

Type: `number` or `null`

### .lastPage

Type: `number` or `null`

### .totalEntries

Type: `number`
