class APIError {
  constructor (error) {
    this.code = error['code']
    this.message = error['message']
    this.details = error['details']
  }
}

// Static variables
APIError.FORBIDDEN = 'forbidden'
APIError.INVALID_INPUT = 'invalid_input'
APIError.JSON_ERROR = 'json_error'
APIError.LOCKED = 'locked'
APIError.NOT_FOUND = 'not_found'
APIError.RATE_LIMIT_EXCEEDED = 'rate_limit_exceeded'
APIError.RESOURCE_LIMIT_EXCEEDED = 'resource_limit_exceeded'
APIError.RESOURCE_UNAVAILABLE = 'resource_unavailable'
APIError.SERVICE_ERROR = 'service_error'
APIError.UNIQUENESS_ERROR = 'uniqueness_error'

module.exports = APIError
